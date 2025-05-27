/// <reference types="react" />
interface Props {
    isVisible: boolean;
    onBack: () => void;
    onClose: () => void;
    onAccept: () => void;
}
/**
 * Warning when selecting unsupported tokens for offramp.
 */
export default function UnsupportedTokenModal({ isVisible, onBack, onClose, onAccept }: Props): JSX.Element | null;
export {};
//# sourceMappingURL=UnsupportedTokenModal.d.ts.map