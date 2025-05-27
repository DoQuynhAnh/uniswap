import { jsx as _jsx } from "react/jsx-runtime";
import { InlineNetworkPill, NetworkPill } from 'uniswap/src/components/network/NetworkPill';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { render } from 'uniswap/src/test/test-utils';
describe(NetworkPill, () => {
    it('renders a NetworkPill without image', () => {
        const tree = render(_jsx(NetworkPill, { chainId: UniverseChainId.Mainnet }));
        expect(tree).toMatchSnapshot();
    });
    it('renders a NetworkPill with border', () => {
        const tree = render(_jsx(NetworkPill, { chainId: UniverseChainId.Mainnet, showBorder: true }));
        expect(tree).toMatchSnapshot();
    });
    it('renders an InlineNetworkPill', () => {
        const tree = render(_jsx(InlineNetworkPill, { chainId: UniverseChainId.Mainnet }));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=NetworkPill.test.js.map