import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useFocusEffect } from '@react-navigation/core';
import { BrowserEvent, SharedEventName } from '@uniswap/analytics-events';
import React, { memo, useEffect, useId, useMemo } from 'react';
import { isWeb } from 'utilities/src/platform';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { analytics } from 'utilities/src/telemetry/analytics/analytics';
import { useAnalyticsNavigationContext } from 'utilities/src/telemetry/trace/AnalyticsNavigationContext';
import { TraceContext, useTrace } from 'utilities/src/telemetry/trace/TraceContext';
import { getEventHandlers } from 'utilities/src/telemetry/trace/utils';
export function getEventsFromProps(logPress, logFocus, logKeyPress) {
    const events = [];
    if (logPress) {
        events.push(isWeb ? 'onClick' : 'onPress');
    }
    if (logFocus) {
        events.push(BrowserEvent.onFocus);
    }
    if (logKeyPress) {
        events.push(BrowserEvent.onKeyPress);
    }
    return events;
}
// only used for avoiding double logging in development
const devDoubleLogDisableMap = {};
function _Trace({ children, logImpression, eventOnTrigger, logPress, logFocus, logKeyPress, directFromPage, screen, page, section, element, modal, properties, }) {
    const id = useId();
    const { useIsPartOfNavigationTree, shouldLogScreen: shouldLogScreen } = useAnalyticsNavigationContext();
    const isPartOfNavigationTree = useIsPartOfNavigationTree();
    const parentTrace = useTrace();
    const events = useMemo(() => {
        return getEventsFromProps(logPress, logFocus, logKeyPress);
    }, [logFocus, logKeyPress, logPress]);
    // Component props are destructured to ensure shallow comparison
    const combinedProps = useMemo(() => {
        // removes `undefined` values
        const filteredProps = {
            ...(screen ? { screen } : {}),
            ...(page ? { page } : {}),
            ...(section ? { section } : {}),
            ...(modal ? { modal } : {}),
            ...(element ? { element } : {}),
        };
        return {
            ...parentTrace,
            ...filteredProps,
        };
    }, [parentTrace, screen, section, modal, element, page]);
    // Log impression on mount for elements that are not part of the navigation tree
    useEffect(() => {
        if (!devDoubleLogDisableMap[id] && logImpression && !isPartOfNavigationTree) {
            if (shouldLogScreen(directFromPage, properties === null || properties === void 0 ? void 0 : properties.screen)) {
                // Log the event
                const eventProps = { ...combinedProps, ...properties };
                analytics.sendEvent(eventOnTrigger !== null && eventOnTrigger !== void 0 ? eventOnTrigger : SharedEventName.PAGE_VIEWED, eventProps);
                // In development for web, ensure we don't double log impressions due to strict mode
                if (__DEV__) {
                    devDoubleLogDisableMap[id] = true;
                    setTimeout(() => {
                        devDoubleLogDisableMap[id] = false;
                    }, 50);
                }
            }
        }
        // Impressions should only be logged on mount.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [logImpression]);
    const modifiedChildren = events.length > 0 ? (_jsx(TraceContext.Consumer, { children: (consumedProps) => React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
                return child;
            }
            // For each child, augment event handlers defined in `actionProps` with event tracing
            return React.cloneElement(child, getEventHandlers(child, consumedProps, events, eventOnTrigger !== null && eventOnTrigger !== void 0 ? eventOnTrigger : SharedEventName.ELEMENT_CLICKED, element, properties));
        }) })) : (children);
    if (!isPartOfNavigationTree) {
        return _jsx(TraceContext.Provider, { value: combinedProps, children: modifiedChildren });
    }
    return (_jsx(NavAwareTrace, { combinedProps: combinedProps, directFromPage: directFromPage, logImpression: logImpression, properties: properties, children: _jsx(TraceContext.Provider, { value: combinedProps, children: modifiedChildren }) }));
}
// Internal component to keep track of navigation events
// Needed since we need to rely on `navigation.useFocusEffect` to track
// impressions of pages that are not unmounted when navigating away from them
function NavAwareTrace({ logImpression, eventOnTrigger, directFromPage, combinedProps, children, properties, }) {
    const { shouldLogScreen } = useAnalyticsNavigationContext();
    // Note: this does not register impressions when going back to a page from a modal
    useFocusEffect(React.useCallback(() => {
        if (logImpression) {
            const eventProps = { ...combinedProps, ...properties };
            if (shouldLogScreen(directFromPage, properties === null || properties === void 0 ? void 0 : properties.screen)) {
                analytics.sendEvent(eventOnTrigger !== null && eventOnTrigger !== void 0 ? eventOnTrigger : SharedEventName.PAGE_VIEWED, eventProps);
            }
        }
    }, [combinedProps, directFromPage, eventOnTrigger, logImpression, properties, shouldLogScreen]));
    return _jsx(_Fragment, { children: children });
}
export const Trace = memo(_Trace);
//# sourceMappingURL=Trace.js.map