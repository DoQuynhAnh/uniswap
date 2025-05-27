/**
 * This component is used to render the text/label within our `Button` component.
 * @props color - The color of the text. If passed as HEX or RGBA, the text will use that color for all of its HTML Element states (i.e. hover, active, etc.), overriding the `emphasis` and `variant` prop.
 * @props custom-background-color - The background color of the `Button` this `CustomButtonText` is a child of. If passed, the text will use the contrast color of the background color for its hover state.
 * **NOTE:** this doesn't need to be passed explicitly if `CustomButtonText`, or `Button.Text`, is a child of a `Button` component has a `backgroundColor` prop passed to it..
 */
export declare const CustomButtonText: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    unstyled?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
//# sourceMappingURL=CustomButtonText.d.ts.map