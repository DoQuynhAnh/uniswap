import { useRef } from 'react';
import { useEvent } from 'utilities/src/react/hooks';
// useRef because we need value access to be synchronous
export function useWarningService() {
    const skipBridgingWarningRef = useRef(false);
    const skipMaxTransferWarningRef = useRef(false);
    const skipTokenProtectionWarningRef = useRef(false);
    const reset = useEvent(() => {
        skipBridgingWarningRef.current = false;
        skipMaxTransferWarningRef.current = false;
        skipTokenProtectionWarningRef.current = false;
    });
    const getSkipBridgingWarning = useEvent(() => skipBridgingWarningRef.current);
    const getSkipMaxTransferWarning = useEvent(() => skipMaxTransferWarningRef.current);
    const getSkipTokenProtectionWarning = useEvent(() => skipTokenProtectionWarningRef.current);
    const setSkipBridgingWarning = useEvent((value) => {
        skipBridgingWarningRef.current = value;
    });
    const setSkipMaxTransferWarning = useEvent((value) => {
        skipMaxTransferWarningRef.current = value;
    });
    const setSkipTokenProtectionWarning = useEvent((value) => {
        skipTokenProtectionWarningRef.current = value;
    });
    return {
        getSkipBridgingWarning,
        getSkipMaxTransferWarning,
        getSkipTokenProtectionWarning,
        setSkipBridgingWarning,
        setSkipMaxTransferWarning,
        setSkipTokenProtectionWarning,
        reset,
    };
}
//# sourceMappingURL=useWarningService.js.map