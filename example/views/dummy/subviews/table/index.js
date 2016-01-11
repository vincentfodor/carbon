import React from 'react';
import FinancesActions from './../../../../actions/finances';
import InputGrid from 'components/input-grid';
import Textbox from 'components/textbox';
import Decimal from 'components/decimal';
import Presence from 'utils/validations/presence';

class Table extends React.Component {
  get totalClassName() {
    if (Number(this.props.balance) < 0) {
      return 'balance--bad';
    } else {
      return 'balance--good';
    }
  }

  render() {
    let fields = [
      <Textbox validations={ [Presence()] } name="[foo][{ROWID}][description]" label="Description" />,
      <Decimal name="[foo][{ROWID}][credit]" label="Credit" />,
      <Decimal name="[foo][{ROWID}][debit]" label="Debit" />,
      <Decimal name="[foo][{ROWID}][total]" label="Total" readOnly />
    ];

    let gutterFields = {
      credit: <Decimal name="credit_total" label={ false } value={ this.props.creditTotal } readOnly />,
      debit: <Decimal name="debit_total" label={ false } value={ this.props.debitTotal } readOnly />,
      total: <Decimal className={ this.totalClassName } name="total" label={ false } value={ this.props.balance } readOnly />
    };

    if (this.props.discount) {
      fields.splice(3, 0, <Decimal name="[foo][{ROWID}][discount_total]" label="Discount" />);
      gutterFields.discount = <Decimal name="discount" value={ this.props.discountTotal } label={ false } readOnly />;
    }

    return (
      <InputGrid
        data={ this.props.data }
        name="line_items"
        fields={ fields }
        gutter={ gutterFields }
        updateRowHandler={ FinancesActions.financesLineItemUpdated }
        deleteRowHandler={ FinancesActions.financesLineItemDeleted } />
    );
  }
}

export default Table;
