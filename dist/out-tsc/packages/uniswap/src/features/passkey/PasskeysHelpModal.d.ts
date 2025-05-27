/// <reference types="react" />
export declare enum PasskeysHelpModalTypes {
    Default = "default",
    InvalidPasskey = "invalidPasskey",
    TechnicalError = "technicalIssue"
}
export declare function PasskeysHelpModal({ isOpen, onClose, type, accountName, }: {
    isOpen: boolean;
    onClose: () => void;
    type?: PasskeysHelpModalTypes;
    accountName?: string;
}): JSX.Element;
//# sourceMappingURL=PasskeysHelpModal.d.ts.map