import { G, Path, Svg } from 'react-native-svg';
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon';
export const [CloudSlash, AnimatedCloudSlash] = createIcon({
    name: 'CloudSlash',
    getIcon: (props) => (<Svg viewBox="0 0 25 24" fill="none" {...props}>
      <G id="cloud-slash">
        <Path id="cloud-slash_2" d="M22.0301 4.53005L4.03005 22.5301C3.88405 22.6761 3.69202 22.75 3.50002 22.75C3.30802 22.75 3.11599 22.6771 2.96999 22.5301C2.67699 22.2371 2.67699 21.762 2.96999 21.469L6.48391 17.955C4.68891 16.807 3.50002 14.791 3.50002 12.5C3.50002 8.91002 6.41002 6.00002 10 6.00002C11.65 6.00002 13.1501 6.61002 14.2901 7.62002C14.7381 8.02102 15.1271 8.48001 15.4541 8.98501L20.97 3.46902C21.263 3.17602 21.738 3.17602 22.031 3.46902C22.323 3.76202 22.3231 4.23805 22.0301 4.53005ZM19.7151 10.171C19.5961 10.071 19.4159 10.084 19.3069 10.194L11.013 18.488C10.824 18.677 10.9581 19 11.2251 19H16.2859C18.8909 19 21.2151 17.1 21.4751 14.508C21.6481 12.776 20.9221 11.187 19.7151 10.171Z" fill={'currentColor' !== null && 'currentColor' !== void 0 ? 'currentColor' : '#131313'}/>
      </G>
    </Svg>),
    defaultFill: '#131313',
});
//# sourceMappingURL=CloudSlash.jsx.map