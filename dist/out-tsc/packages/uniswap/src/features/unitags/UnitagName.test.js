import { jsx as _jsx } from "react/jsx-runtime";
import { UnitagName } from 'uniswap/src/features/unitags/UnitagName';
import { renderWithProviders } from 'uniswap/src/test/render';
it('renders UnitagName without a name', () => {
    const tree = renderWithProviders(_jsx(UnitagName, { animateText: true, textProps: { fontSize: 12 } }));
    expect(tree).toMatchSnapshot();
});
it('renders UnitagName with a name', () => {
    const tree = renderWithProviders(_jsx(UnitagName, { animateText: true, animateIcon: true, textProps: { fontSize: 12 }, name: "testing" }));
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=UnitagName.test.js.map