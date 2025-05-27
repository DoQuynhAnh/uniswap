import { PropsWithChildren } from 'react';
/**
 * Renders text, wrapping any text between curly braces ({}) with `EmphasizedText`.
 * Example: <EmphasizableText>Normal {emphasized} normal</EmphasizableText>
 */
export declare const EmphasizableText: ({ children }: {
    children: string;
}) => JSX.Element;
export declare const StorybookComponents: {
    SectionHeader: ({ title }: {
        title: string;
    }) => JSX.Element;
    SectionSubHeader: ({ title }: {
        title: string;
    }) => JSX.Element;
    SectionSeparator: () => JSX.Element;
    PageTitle: ({ description, figmaUrl, componentName, componentUrl, }: {
        description: string;
        figmaUrl: string;
        componentName: string;
        componentUrl: string;
    }) => JSX.Element;
    VariantHeaderContainer: ({ children }: PropsWithChildren) => JSX.Element;
    EmphasizableText: ({ children }: {
        children: string;
    }) => JSX.Element;
};
//# sourceMappingURL=organizationalComponents.d.ts.map