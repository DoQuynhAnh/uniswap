import { PlainImage } from 'ui/src/components/UniversalImage/internal/PlainImage';
// For web, fall back to plain image
export function FastImageWrapper({ setError: _, ...rest }) {
    return <PlainImage {...rest}/>;
}
//# sourceMappingURL=FastImageWrapper.jsx.map