import * as React from "react";
import classNames from "classnames";
import TooltipDecorator from "../../utils/decorators/tooltip-decorator";
import Icons from "./icons";
import { validProps } from "../../utils/ether";
import tagComponent from "../../utils/helpers/tags";
import "./icon.scss";
import "./fonts/carbon-icons-webfont.woff";
interface IconProps {
  className?: string,
  type: string,
  bgSize: 'small' | 'medium' | 'large',
  bgShape: 'square' | 'rounded-rect' | 'circle',
  bgTheme: string
};
/**
 * An Icon widget.
 *
 * == How to use an Icon in a component:
 *
 * In your file
 *
 *   import Icon from 'carbon-react/lib/components/icon';
 *
 * To render an Icon:
 *
 *   <Icon type='foo' />
 *
 * 'type' is a required prop
 *
 * This widget follows this pattern:
 * https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
 *
 * For information on how to use the Tooltip Decorator see the decorator docs.
 *
 * @class Icon
 * @constructor
 */
const Icon = TooltipDecorator(
  class Icon extends React.Component<IconProps, {}> {
    static defaultProps = {
      bgSize: "small"
    };
    _target: HTMLSpanElement | null;
    tooltipHTML: any;
    /**
     * Checks if we have an SVG available, otherwise will fall back
     * to using the icon font.
     *
     * @method renderIcon
     * @return {HTML}
     */
    get renderIcon() {
      return Icons[this.type];
    }
    /**
     * Return component props
     *
     * @method componentProps
     * @return {Object} props
     */
    get componentProps() {
      const { ...props } = validProps(this);
      delete props.className;
      delete props.bgSize;
      delete props.bgShape;
      delete props.bgTheme;
      return props;
    }
    /**
     * Return component classes
     *
     * @method mainClasses
     * @return {String} classes
     */
    get mainClasses() {
      const icon = this.renderIcon;
      const hasShape = this.props.bgShape || this.props.bgTheme;
      const classes = classNames(
        "carbon-icon",
        this.props.className,
        {
          [`icon-${this.type}`]: !icon
        },
        {
          "carbon-icon--shape": hasShape,
          [`carbon-icon--${this.props.bgSize}`]: hasShape,
          [`carbon-icon--${this.props.bgShape}`]: this.props.bgShape,
          [`carbon-icon--${this.props.bgTheme}`]: this.props.bgTheme
        }
      );
      return classes;
    }
    /**
     * Return Icon type with overrides
     *
     * @method type
     * @return {String} icon type
     */
    get type() {
      // switch tweaks icon names for actual icons in the set
      switch (this.props.type) {
        case "help":
          return "question";
        case "maintenance":
          return "settings";
        case "new":
          return "gift";
        case "success":
          return "tick";
        default:
          return this.props.type;
      }
    }
    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX
     */
    render() {
      return [
        <span
          key="icon"
          className={this.mainClasses}
          {...this.componentProps}
          {...tagComponent("icon", this.props)}
          ref={comp => {
            this._target = comp;
          }}
          data-element={this.type}
        >
          {this.iconSvgHTML()}
        </span>,
        this.tooltipHTML
      ];
    }
    iconSvgHTML = () => {
      const icon = this.renderIcon;
      if (icon) {
        /* eslint-disable react/no-danger */
        return (
          <span
            className="carbon-icon__svg-icon"
            dangerouslySetInnerHTML={icon}
          />
        );
        /* eslint-enable react/no-danger */
      }
      return null;
    };
  }
);
export default Icon;
