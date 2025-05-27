import { DependencyList } from 'react';
/**
 * Hook for measuring performance between renders on target dependencies.
 *
 * @param eventName - The name of the event to log.
 * @param dependencyList - The DependencyList that will start tracking the performance.
 *
 * Example:
 *
 * usePerformanceLogger('render_activity_tab_list', [userStateThatTriggersRender])
 *
 **/
export declare function usePerformanceLogger(eventName: string, dependencyList: DependencyList): void;
//# sourceMappingURL=usePerformanceLogger.native.d.ts.map