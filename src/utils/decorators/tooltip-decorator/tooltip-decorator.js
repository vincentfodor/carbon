import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { assign } from 'lodash';
import Tooltip from '../../../components/tooltip';
import positionTooltip from '../../../components/tooltip/tooltip-position.config';
import Portal from '../../../components/portal';
import chainFunctions from '../../helpers/chain-functions';

/**
 * TooltipDecorator.
 *
 * This decorator attaches a tooltip to a component.
 *
 * == How to use Tooltip decorator in a component:
 *
 * In your file:
 *
 *   import TooltipDecorator from 'carbon-react/lib/utils/decorators/tooltip-decorator';
 *
 * To use the decorator, wrap your component with it:
 *
 *   const MyComponent = TooltipDecorator(
 *   class MyComponent extends React.Component {
 *     ...
 *   });
 *
 * You must also output the tooltip HTML in your component's render method:
 *
 * e.g.
 *
 * render() {
 *   return (
 *     <div>
 *       { this.tooltipHTML }
 *       ...your components JSX
 *     </div>
 *   );
 * }
 *
 * You must also give the surrounding div of the component a position of 'relative'
 *
 * e.g.
 *
 * render() {
 *   return (
 *     <div className='relative-class'>
 *       { this.tooltipHTML }
 *       ...your component's JSX
 *     </div>
 *   );
 * }
 *
 * The targetted JSX must also have a ref of _target and have the correct componentProps
 *
 * e.g.
 *
 * render() {
 *   return (
 *     <div className='relative-class'>
 *       <span
 *         ref={ (comp) => this._target = comp }
 *         { ...this.componentProps }
 *       />
 *       { this.tooltipHTML }
 *     </div>
 *   );
 * }
 *
 * To activate the tooltip, you must pass a prop of 'tooltipMessage' with some text content.
 *
 * render() {
 *   return (
 *     <MyComponent tooltipMessage='Some Helpful Content' />
 *   )
 * }
 *
 *
 * @method TooltipDecorator
 * @param {Class} ComposedComponent class to decorate
 * @return {Object} Decorated Component
 */
const TooltipDecorator = (ComposedComponent) => {
  class Component extends ComposedComponent {
    static propTypes = assign({}, ComposedComponent.propTypes, {

      /**
       * The message for this tooltip
       *
       * @property
       * @type {Node}
       */
      tooltipMessage: PropTypes.node,

      /**
       * The position of this tooltip: top, bottom, left or right
       *
       * @property
       * @default top
       * @type {String}
       */
      tooltipPosition: PropTypes.string,

      /**
       * The alignment of this tooltip: left, right or center
       *
       * @property
       * @default center
       * @type {String}
       */
      tooltipAlign: PropTypes.string
    });

    /**
     * Timeout for firing ajax request for showing the tooltip
     *
     * @property _showTooltipTimeout
     */
    _showTooltipTimeout = null;

    /**
     * Timeout for firing ajax request for hiding the tooltip
     *
     * @property _hideTooltipTimeout
     */
    _hideTooltipTimeout = null;

    componentDidMount() {
      if (super.componentDidMount) super.componentDidMount();
      if (this.props.tooltipVisible) this.positionTooltipIfVisible();
    }

    /**
     * @method componentDidUpdate
     * @return {Void}
     */
    componentDidUpdate(prevProps) {
      if (super.componentDidUpdate) { super.componentDidUpdate(prevProps); }

      if (this.props.tooltipMessage && this.isVisible()) {
        this.positionTooltipIfVisible();
      }
    }

    /**
     * A lifecycle called immediatly before new props cause a re-render
     * Resets the hover state if active
     *
     * @method componentWillReceiveProps
     */
    componentWillReceiveProps(nextProps) {
      if (super.componentWillReceiveProps) { super.componentWillReceiveProps(nextProps); }

      if (this.isVisible()) {
        this.setState({ isVisible: false });
      }
    }

    state = {
      /**
       * Whether tooltip currently showing
       *
       * @property isVisible
       * @type {Boolean}
       * @default false
       */
      isVisible: false
    };

    isVisible = () => {
      return this.state.isVisible || this.props.tooltipVisible;
    }

    /**
     * Shows tooltip
     *
     * @method onShow
     * @return {void}
     */
    onShow = () => {
      clearTimeout(this._hideTooltipTimeout);

      this._showTooltipTimeout = setTimeout(() => {
        this.setState({ isVisible: true });
        this.positionTooltipIfVisible();
      }, 100);
    };

    /**
     * Hides tooltip
     *
     * @method onHide
     * @return {void}
     */
    onHide = () => {
      clearTimeout(this._showTooltipTimeout);

      this._hideTooltipTimeout = setTimeout(() => {
        this.setState({ isVisible: false });
      }, 100);
    };

    /**
     * Returns the DOM node of the target.
     *
     * @method getTarget
     * @return {DOM node}
     */
    getTarget = () => {
      return ReactDOM.findDOMNode(this._target); // eslint-disable-line react/no-find-dom-node
    }

    /**
     * Returns the DOM node of the tooltip.
     *
     * @method getTooltip
     * @return {DOM node}
     */
    getTooltip = () => {
      return ReactDOM.findDOMNode(this._tooltip); // eslint-disable-line react/no-find-dom-node
    }

    realignOffscreenTooltip = (horizontalPosition, tooltipWidth) => {
      if (this.props.tooltipAlign === 'right' || this.state.tooltipAlign === 'right') return;

      const position = this.props.tooltipPosition || 'top';

      if (position === 'top' || position === 'bottom') {
        if (window.innerWidth < (horizontalPosition + tooltipWidth)) {
          this.setState({ tooltipAlign: 'right' });
        }
      }
    }

    /**
     * Positions tooltip relative to target
     *
     * @method positionTooltip
     * @param {Object} tooltip
     * @param {Object} target
     * @return {Void}
     */
    positionTooltipIfVisible = () => {
      if (!this.isVisible()) {
        return;
      }

      const tooltip = this.getTooltip();
      const target = this.getTarget();

      if (!tooltip || !target) {
        // Can't find the tooltip or target so hide
        if (this.state.isVisible) this.setState({ isVisible: false });
        return;
      }

      const alignment = this.state.tooltipAlign || this.props.tooltipAlign || 'center';
      const position = this.props.tooltipPosition || 'top';

      const { x } = positionTooltip(tooltip, target, position, alignment);

      this.realignOffscreenTooltip(x, tooltip.offsetWidth);
    }

    /**
     * Additional Props for decorated component
     *
     * @method componentProps
     * @return {Object} props
     */
    get componentProps() {
      const props = super.componentProps || {};

      if (this.props.tooltipMessage) {
        props.onMouseEnter = chainFunctions(this.onShow, props.onMouseEnter);
        props.onMouseLeave = chainFunctions(this.onHide, props.onMouseLeave);
        props.onFocus = chainFunctions(this.onShow, props.onFocus);
        props.onBlur = chainFunctions(this.onHide, props.onBlur);
        props.onTouchEnd = this.isVisible() ? this.onHide : this.onShow;
      }
      return props;
    }

    /**
     * Supplies the HTML for tooltip
     *
     * @method tooltipHTML
     * @return {Object} JSX for tooltip
     */
    get tooltipHTML() {
      return (
        (this.props.tooltipMessage && this.isVisible()) && (
          <Portal key='tooltip'>
            <Tooltip
              align={ this.state.tooltipAlign || this.props.tooltipAlign }
              data-element='tooltip'
              isVisible={ this.isVisible() }
              onMouseEnter={ this.onShow }
              onMouseLeave={ this.onHide }
              position={ this.props.tooltipPosition }
              ref={ (comp) => { this._tooltip = comp; } }
              type={ this.props.tooltipType }
            >
              { this.props.tooltipMessage }
            </Tooltip>
          </Portal>
        )
      );
    }
  }

  Component.displayName = ComposedComponent.displayName || ComposedComponent.name;
  return Component;
};

export default TooltipDecorator;
