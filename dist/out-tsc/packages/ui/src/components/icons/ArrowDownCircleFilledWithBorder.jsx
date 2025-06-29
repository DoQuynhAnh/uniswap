import { Path, Rect, Svg } from 'react-native-svg';
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon';
export const [ArrowDownCircleFilledWithBorder, AnimatedArrowDownCircleFilledWithBorder] = createIcon({
    name: 'ArrowDownCircleFilledWithBorder',
    getIcon: (props) => (<Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Rect width="24" height="24" rx="12" fill="white"/>
      <Path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15.53 13.53L12.53 16.53C12.461 16.599 12.3781 16.6539 12.2871 16.6919C12.1961 16.7299 12.098 16.75 12 16.75C11.902 16.75 11.8049 16.7299 11.7129 16.6919C11.6209 16.6539 11.539 16.599 11.47 16.53L8.46997 13.53C8.17697 13.237 8.17697 12.762 8.46997 12.469C8.76297 12.176 9.23801 12.176 9.53101 12.469L11.251 14.189V8C11.251 7.586 11.587 7.25 12.001 7.25C12.415 7.25 12.751 7.586 12.751 8V14.189L14.4709 12.469C14.7639 12.176 15.239 12.176 15.532 12.469C15.825 12.762 15.823 13.237 15.53 13.53Z" fill={'currentColor' !== null && 'currentColor' !== void 0 ? 'currentColor' : '#FF37C7'}/>
    </Svg>),
    defaultFill: '#FF37C7',
});
//# sourceMappingURL=ArrowDownCircleFilledWithBorder.jsx.map