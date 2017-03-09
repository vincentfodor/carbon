import React from 'react';
import { shallow } from 'enzyme';
import FormButtons from './form-buttons';

describe('<FormButtons />', () => {
  let key = 'carbon-form-buttons',
      wrapper;

  beforeEach(() => wrapper = shallow(<FormButtons> </FormButtons>));


  // let buttons;
  // let buttonContainers;

  // beforeEach(() => {
  //   buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button')
  //   buttonContainers = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
  // });

  // it('renders two buttons', () => {
  //   expect(buttons.length).toEqual(2);
  // });

  // it('renders a secondary cancel button with cancelClasses', () => {
  //   TestUtils.findRenderedDOMComponentWithClass(instance, 'carbon-form__cancel');
  //   expect(buttons[1].className).toMatch('carbon-button carbon-button--secondary');
  // });

  // it('when cancelText prop is passed it renders the secondary button with the prop', () => {
  //   instance = TestUtils.renderIntoDocument(
  //     <Form cancelText={'Foo'} />
  //   );
  //   buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button')
  //   expect(buttons[1].innerHTML).toEqual('Foo');
  // });

  // it('when cancelText prop is not passed it renders the secondary button with default text', () => {
  //   expect(buttons[1].innerHTML).toEqual(
  //     I18n.t('actions.cancel', { defaultValue: 'Cancel' })
  //   );
  // });

  // it('renders a primary save button with saveClasses', () => {
  //   expect(buttons[0].className).toMatch('carbon-button carbon-button--primary');
  //   expect(buttonContainers[1].className).toEqual('carbon-form__save');
  // });

  // it('renders an undisabled save button if not submitting', () => {
  //   expect(buttons[0].disabled).toBeFalsy();
  // });

  // it('renders a disabled save button if saving', () => {
  //   instance = TestUtils.renderIntoDocument(
  //     <Form saving={true} />
  //   );
  //   buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button')
  //   expect(buttons[0].disabled).toBeTruthy();
  // });

  // describe('when saveButtonProps is passed', () => {
  //   it('sets save button props', () => {
  //     let theme = 'magenta';

  //     instance = TestUtils.renderIntoDocument(<Form saveButtonProps={ { theme: theme } } />);
  //     buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button')
  //     expect(buttons[0].className).toContain(`carbon-button--${theme}`);
  //   });
  // });

  // describe('when cancelButtonProps is passed', () => {
  //   it('sets cancel button props', () => {
  //     let theme = 'red';

  //     instance = TestUtils.renderIntoDocument(<Form cancelButtonProps={ { theme: theme } } />);
  //     buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button')
  //     expect(buttons[1].className).toContain(`carbon-button--${theme}`);
  //   });
  // });



    // describe('Cancel Button', () => {
    //   describe('when cancel prop is false', () => {
    //     it('does not show a cancel button', () => {
    //       let instance = TestUtils.renderIntoDocument(<Form cancel={ false } />);
    //       let buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
    //       expect(buttons.length).toEqual(1);
    //     });
    //   });

    //   describe('when cancel props is true (default)', () => {
    //     it('does show a cancel button', () => {
    //       let buttons = TestUtils.findRenderedDOMComponentWithClass(instance, 'carbon-form__cancel');
    //       expect(buttons).toBeDefined();
    //     });
    //   });
    // });

    // describe('Save Button', () => {
    //   describe('when save is true or is not set to false', () => {
    //     it('shows a save button', () => {
    //       let instance = TestUtils.renderIntoDocument(<Form save={ true }/>);
    //       let button = TestUtils.findRenderedDOMComponentWithClass(instance, 'carbon-form__save')
    //     });
    //   });

    //   describe('when save is set to false', () => {
    //     it('does not show a save button', () => {
    //       let instance = TestUtils.renderIntoDocument(<Form save={ false }/>);
    //       let buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
    //       expect(buttons.length).toEqual(1);
    //     });
    //   });
    // });

});
