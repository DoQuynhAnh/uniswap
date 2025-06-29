import { G, Path, Svg } from 'react-native-svg';
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon';
export const [WalletAlert, AnimatedWalletAlert] = createIcon({
    name: 'WalletAlert',
    getIcon: (props) => (<Svg viewBox="0 0 40 41" fill="none" {...props}>
      <G id="wallet">
        <Path id="Vector" d="M33.333 7.16699C36.0944 7.16699 38.333 9.40557 38.333 12.167V30.5C38.333 33.2614 36.0944 35.5 33.333 35.5H6.66699C3.90557 35.5 1.66699 33.2614 1.66699 30.5V12.167C1.66699 9.40557 3.90557 7.16699 6.66699 7.16699H33.333ZM6.66895 17.167C5.74733 17.167 5.00018 17.9139 5 18.833V20.9463C5.49032 20.6626 6.05978 20.5 6.66699 20.5H13.1904C14.1646 20.5 14.9425 21.4914 15.3223 22.5166C15.8031 23.8151 17.15 25.2617 20 25.2617C22.9817 25.2617 24.0729 23.6785 24.6074 22.3379C24.9891 21.3806 25.7465 20.5 26.667 20.5H33.333C33.9402 20.5 34.5097 20.6626 35 20.9463V18.833C34.9998 17.9139 34.2527 17.167 33.3311 17.167H6.66895ZM6.66699 10.5C5.74652 10.5 5 11.2465 5 12.167V14.1182C5.52195 13.9335 6.08404 13.833 6.66895 13.833H33.3311C33.916 13.833 34.4781 13.9335 35 14.1182V12.167C35 11.2465 34.2535 10.5 33.333 10.5H6.66699Z" fill={'currentColor' !== null && 'currentColor' !== void 0 ? 'currentColor' : '#131313'} fillOpacity="0.35"/>
      </G>
    </Svg>),
    defaultFill: '#131313',
});
//# sourceMappingURL=WalletAlert.jsx.map