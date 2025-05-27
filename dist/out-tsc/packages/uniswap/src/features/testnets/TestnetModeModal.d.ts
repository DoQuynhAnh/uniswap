/// <reference types="react" />
type TestnetModeModalProps = {
    isOpen: boolean;
    unsupported?: boolean;
    descriptionCopy?: string;
    showCloseButton?: boolean;
    onClose: () => void;
};
export type TestnetModeModalState = Omit<TestnetModeModalProps, 'onClose' | 'isOpen'>;
export declare function TestnetModeModal({ isOpen, descriptionCopy, unsupported, showCloseButton, onClose, }: TestnetModeModalProps): JSX.Element;
export {};
//# sourceMappingURL=TestnetModeModal.d.ts.map