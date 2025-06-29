import { G, Path, Svg } from 'react-native-svg';
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon';
export const [Sliders, AnimatedSliders] = createIcon({
    name: 'Sliders',
    getIcon: (props) => (<Svg viewBox="0 0 24 24" fill="none" {...props}>
      <G id="sliders">
        <Path id="Vector" d="M8 16C8 16.552 7.552 17 7 17H6V21C6 21.552 5.552 22 5 22C4.448 22 4 21.552 4 21V17H3C2.448 17 2 16.552 2 16C2 15.448 2.448 15 3 15H7C7.552 15 8 15.448 8 16ZM5 13C5.552 13 6 12.552 6 12V3C6 2.448 5.552 2 5 2C4.448 2 4 2.448 4 3V12C4 12.552 4.448 13 5 13ZM12 11C11.448 11 11 11.448 11 12V21C11 21.552 11.448 22 12 22C12.552 22 13 21.552 13 21V12C13 11.448 12.552 11 12 11ZM14 7H13V3C13 2.448 12.552 2 12 2C11.448 2 11 2.448 11 3V7H10C9.448 7 9 7.448 9 8C9 8.552 9.448 9 10 9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7ZM21 15H17C16.448 15 16 15.448 16 16C16 16.552 16.448 17 17 17H18V21C18 21.552 18.448 22 19 22C19.552 22 20 21.552 20 21V17H21C21.552 17 22 16.552 22 16C22 15.448 21.552 15 21 15ZM19 13C19.552 13 20 12.552 20 12V3C20 2.448 19.552 2 19 2C18.448 2 18 2.448 18 3V12C18 12.552 18.448 13 19 13Z" fill={'currentColor' !== null && 'currentColor' !== void 0 ? 'currentColor' : '#222222'}/>
      </G>
    </Svg>),
    defaultFill: '#222222',
});
//# sourceMappingURL=Sliders.jsx.map