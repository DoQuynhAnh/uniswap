import { PropsWithChildren } from 'react';
import { ElementNameType, InterfacePageNameType, ModalNameType, SectionNameType } from 'uniswap/src/features/telemetry/constants';
import { UniverseEventProperties } from 'uniswap/src/features/telemetry/types';
import { ExtensionScreen } from 'uniswap/src/types/screens/extension';
import { MobileAppScreen } from 'uniswap/src/types/screens/mobile';
import { TraceProps } from 'utilities/src/telemetry/trace/Trace';
interface UniverseTraceContext {
    page?: InterfacePageNameType;
    screen?: MobileAppScreen | ExtensionScreen;
    section?: SectionNameType;
    modal?: ModalNameType;
    element?: ElementNameType;
}
type BaseTraceProps = UniverseTraceContext & Omit<TraceProps, 'eventOnTrigger' | 'properties'>;
declare function _Trace<EventName extends keyof UniverseEventProperties | undefined>({ children, eventOnTrigger, properties, logImpression, logPress, logFocus, logKeyPress, ...rest }: PropsWithChildren<BaseTraceProps & {
    eventOnTrigger?: EventName;
    properties?: EventName extends keyof UniverseEventProperties ? UniverseEventProperties[EventName] : Record<string, unknown>;
}>): JSX.Element;
declare const Trace: typeof _Trace;
export { Trace };
export default Trace;
//# sourceMappingURL=Trace.d.ts.map