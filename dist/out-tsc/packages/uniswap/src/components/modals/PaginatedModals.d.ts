/// <reference types="react" />
export type PaginatedModalProps = {
    onAcknowledge: () => void;
    onClose: () => void;
    key: number;
};
export type PaginatedModalRenderer = (props: PaginatedModalProps) => JSX.Element | null;
type PaginatedModalsProps = {
    modals: PaginatedModalRenderer[];
    onClose: () => void;
    onFinish: () => void;
};
export declare function PaginatedModals({ modals, onClose, onFinish }: PaginatedModalsProps): JSX.Element | null;
export {};
//# sourceMappingURL=PaginatedModals.d.ts.map