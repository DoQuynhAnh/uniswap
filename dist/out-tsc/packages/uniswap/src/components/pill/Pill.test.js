import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from 'ui/src';
import { Pill } from 'uniswap/src/components/pill/Pill';
import { render } from 'uniswap/src/test/test-utils';
it('renders a Pill without image', () => {
    const tree = render(_jsx(Pill, { backgroundColor: "$surface2", foregroundColor: "#000", label: "My Pill Label" }));
    expect(tree).toMatchSnapshot();
});
it('renders a Pill with border', () => {
    const tree = render(_jsx(Pill, { borderColor: "$statusSuccess", icon: _jsx(Text, { children: "Icon" }), label: "My Second Pill Label" }));
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Pill.test.js.map