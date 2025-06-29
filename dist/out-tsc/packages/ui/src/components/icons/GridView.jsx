import { G, Path, Svg } from 'react-native-svg';
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon';
export const [GridView, AnimatedGridView] = createIcon({
    name: 'GridView',
    getIcon: (props) => (<Svg viewBox="0 0 24 24" fill="none" {...props}>
      <G id="Icon">
        <Path id="Vector" d="M20 5.5V8.5C20 9.5 19.5 10 18.5 10H15.5C14.5 10 14 9.5 14 8.5V5.5C14 4.5 14.5 4 15.5 4H18.5C19.5 4 20 4.5 20 5.5ZM8.5 4H5.5C4.5 4 4 4.5 4 5.5V8.5C4 9.5 4.5 10 5.5 10H8.5C9.5 10 10 9.5 10 8.5V5.5C10 4.5 9.5 4 8.5 4ZM18.5 14H15.5C14.5 14 14 14.5 14 15.5V18.5C14 19.5 14.5 20 15.5 20H18.5C19.5 20 20 19.5 20 18.5V15.5C20 14.5 19.5 14 18.5 14ZM8.5 14H5.5C4.5 14 4 14.5 4 15.5V18.5C4 19.5 4.5 20 5.5 20H8.5C9.5 20 10 19.5 10 18.5V15.5C10 14.5 9.5 14 8.5 14Z" fill={'currentColor' !== null && 'currentColor' !== void 0 ? 'currentColor' : '#000000'}/>
      </G>
    </Svg>),
    defaultFill: '#000000',
});
//# sourceMappingURL=GridView.jsx.map