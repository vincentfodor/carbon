import * as React from "react";
import "./link.scss";
declare type _LinkProps = {
    className?: string;
    disabled?: boolean;
    href?: string;
    icon?: string;
    iconAlign?: string;
    onClick?: (...args: any[]) => any;
    onKeyDown?: (...args: any[]) => any;
    tabbable?: boolean;
    to?: string;
    tooltipMessage?: string;
    tooltipPosition?: string;
    tooltipAlign?: string;
};
/**
 * A link widget.
 *
 * == How to use a Link in a component:
 *
 * In your file:
 *
 *   import Link from 'carbon-react/lib/components/link';
 *
 * To render the Link:
 *
 *  <Link href='foo'>Main Page</Link>
 *
 * For additional properties specific to this component, see propTypes.
 *
 * @class Link
 * @constructor
 */
declare class _Link extends React.Component<_LinkProps, {}> {
    static defaultProps: {
        iconAlign: string;
        tabbable: boolean;
    };
    static safeProps: string[];
    constructor(...args: any[]);
    /**
     * Triggers the onClick event for the enter key
     *
     * @method onKeyDown
     * @param {Object} ev
     */
    onKeyDown(ev: any): void;
    /**
     * Getter for componet classes.
     *
     * @method componentClasses
     * @return {String} class names
     */
    readonly componentClasses: any;
    /**
     * Returns the icon if enabled and aligned to the left.
     *
     * @method iconLeft
     * @return {Object} JSX
     */
    readonly iconLeft: JSX.Element | null;
    /**
     * Returns the icon if enabled and aligned to the right.
     *
     * @method iconRight
     * @return {Object} JSX
     */
    readonly iconRight: JSX.Element | null;
    /**
     * Returns the markup for the icon.
     *
     * @method icon
     * @return {Object} JSX
     */
    readonly icon: JSX.Element;
    /**
     * Returns 0 or -1 for tabindex
     *
     * @method tabIndex
     * @return {String} 0 or -1
     */
    readonly tabIndex: "0" | "-1";
    /**
     * Regex for finding 'href:' or 'to:',
     *
     * @method typeRegex
     * @return {Regex}
     */
    readonly typeRegex: RegExp;
    /**
     * A hash of the different link types.
     *
     * @method linkTypes
     * @return {Object}
     */
    readonly linkTypes: {
        to: {
            prop: string;
            component: any;
        };
        href: {
            prop: string;
            component: string;
        };
    };
    /**
     * Returns the correct link type based on the given props.
     *
     * @method linkType
     * @return {Object}
     */
    readonly linkType: any;
    /**
     * Returns the parsed URL for the link.
     *
     * @method url
     * @return {String}
     */
    readonly url: string | null;
    /**
     * Getter for component properties.
     *
     * @method componentProps
     * @return {Object} props
     */
    readonly componentProps: any;
    /**
     * Renders the component.
     *
     * @method render
     */
    render(): React.ComponentElement<any, React.Component<any, any, any>>;
}
export default _Link;
