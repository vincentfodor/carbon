import * as React from "react";
import "./button.scss";
declare type ButtonProps = {
    as?: string;
    disabled?: boolean;
    theme?: string;
    size?: string;
    subtext?: any;
};
/**
 * A button widget.
 *
 * == How to use a Button in a component:
 *
 * In your file:
 *
 *   import Button from 'carbon-react/lib/components/button';
 *
 * To render the Button:
 *
 *   <Button>Save</Button>
 *
 *  ### Themes
 *
 *  Currently available button themese are blue(default), green, red, magenta, grey & white.
 *
 * For additional properties specific to this component, see propTypes and defaultProps.
 *
 * @class Button
 * @constructor
 */
declare class Button extends React.Component<ButtonProps, {}> {
    static safeProps: string[];
    static defaultProps: {
        as: string;
        size: string;
        theme: string;
        disabled: boolean;
        subtext: string;
    };
    constructor(...args: any[]);
    /**
     * Creates the child object for the button
     *
     * @return {Object} JSX
     */
    buildChildren(): React.ReactNode;
    /**
     * Build the element to render.
     *
     * @method element
     * @return {Object} JSX
     */
    element(): React.ReactElement<{
        className?: string | undefined;
        disabled?: boolean | undefined;
        href?: string | undefined;
        icon?: string | undefined;
        iconAlign?: string | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        onKeyDown?: ((...args: any[]) => any) | undefined;
        tabbable?: boolean | undefined;
        to?: string | undefined;
        tooltipMessage?: string | undefined;
        tooltipPosition?: string | undefined;
        tooltipAlign?: string | undefined;
    }>;
    /**
     * Renders the component with props.
     *
     * @method render
     * @return {Object} JSX
     */
    render(): React.ReactElement<{
        className?: string | undefined;
        disabled?: boolean | undefined;
        href?: string | undefined;
        icon?: string | undefined;
        iconAlign?: string | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        onKeyDown?: ((...args: any[]) => any) | undefined;
        tabbable?: boolean | undefined;
        to?: string | undefined;
        tooltipMessage?: string | undefined;
        tooltipPosition?: string | undefined;
        tooltipAlign?: string | undefined;
    }>;
}
export default Button;
