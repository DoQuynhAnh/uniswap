import { jsx as _jsx } from "react/jsx-runtime";
import { SplitLogo } from 'uniswap/src/components/CurrencyLogo/SplitLogo';
import PasteButton from 'uniswap/src/components/buttons/PasteButton';
import { render } from 'uniswap/src/test/test-utils';
describe(SplitLogo, () => {
    it('renders without error', () => {
        const tree = render(_jsx(PasteButton, { onPress: (text) => text }));
        expect(tree).toMatchSnapshot();
    });
    describe('inline', () => {
        it('renders inline button', () => {
            const tree = render(_jsx(PasteButton, { inline: true, onPress: (text) => text }));
            expect(tree).toMatchSnapshot();
        });
    });
});
//# sourceMappingURL=PasteButton.test.js.map