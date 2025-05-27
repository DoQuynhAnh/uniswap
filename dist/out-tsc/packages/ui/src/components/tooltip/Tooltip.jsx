import { withStaticProperties } from 'tamagui';
import { PlatformSplitStubError } from 'utilities/src/errors';
export const Tooltip = withStaticProperties((_props) => {
    throw new PlatformSplitStubError('Tooltip');
}, {
    Trigger: (_props) => {
        throw new PlatformSplitStubError('Tooltip.Trigger');
    },
    Content: (_props) => {
        throw new PlatformSplitStubError('Tooltip.Content');
    },
    Arrow: (_props) => {
        throw new PlatformSplitStubError('Tooltip.Arrow');
    },
});
//# sourceMappingURL=Tooltip.jsx.map