import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback, useRef, useState } from 'react';
export function PaginatedModals({ modals, onClose, onFinish }) {
    const previousPagesRef = useRef(new Set());
    const [shownModalIndex, setShownModalIndex] = useState(0);
    const cleanup = useCallback(() => {
        previousPagesRef.current.clear();
        setShownModalIndex(0);
    }, []);
    const handleClose = useCallback((modalIndex) => {
        // We want to call onClose only if the modal was closed without confirming.
        // (onConfirm will be called first when the user confirms)
        if (!previousPagesRef.current.has(modalIndex)) {
            cleanup();
            onClose();
        }
    }, [onClose, cleanup]);
    const handleConfirm = useCallback(() => {
        setShownModalIndex((currentIndex) => {
            previousPagesRef.current.add(currentIndex);
            if (currentIndex + 1 >= modals.length) {
                cleanup();
                onFinish();
                return currentIndex;
            }
            return currentIndex + 1;
        });
    }, [modals.length, onFinish, cleanup]);
    const renderModal = modals[shownModalIndex];
    return renderModal ? (_jsx(Page, { modalIndex: shownModalIndex, renderModal: renderModal, onClose: handleClose, onConfirm: handleConfirm })) : null;
}
const Page = memo(function _Page({ modalIndex, renderModal, onClose, onConfirm }) {
    return renderModal({ onClose: () => onClose(modalIndex), onAcknowledge: onConfirm, key: modalIndex });
});
//# sourceMappingURL=PaginatedModals.js.map