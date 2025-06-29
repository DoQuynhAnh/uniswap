import { Path, Svg } from 'react-native-svg';
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon';
export const [ExchangeHorizontal, AnimatedExchangeHorizontal] = createIcon({
    name: 'ExchangeHorizontal',
    getIcon: (props) => (<Svg viewBox="0 0 16 16" fill="none" {...props}>
      <Path d="M14.3532 9.68654L11.0198 13.0199C10.9225 13.1172 10.7945 13.1665 10.6665 13.1665C10.5385 13.1665 10.4105 13.1179 10.3131 13.0199C10.1178 12.8245 10.1178 12.5078 10.3131 12.3125L12.7931 9.83254H3.99982C3.72382 9.83254 3.49982 9.60854 3.49982 9.33254C3.49982 9.05654 3.72382 8.83254 3.99982 8.83254H13.9998C14.2025 8.83254 14.3846 8.95446 14.4619 9.14113C14.5392 9.32846 14.4965 9.54387 14.3532 9.68654ZM12.4998 5.99985C12.4998 5.72385 12.2758 5.49985 11.9998 5.49985H3.20717L5.68715 3.01987C5.88249 2.82454 5.88249 2.50785 5.68715 2.31252C5.49182 2.11718 5.17513 2.11718 4.9798 2.31252L1.64646 5.64585C1.50313 5.78852 1.46107 6.00378 1.53774 6.19045C1.61507 6.37711 1.79782 6.4992 1.99982 6.4992H11.9998C12.2758 6.49987 12.4998 6.27585 12.4998 5.99985Z" fill={'currentColor' !== null && 'currentColor' !== void 0 ? 'currentColor' : '#9B9B9B'}/>
    </Svg>),
    defaultFill: '#9B9B9B',
});
//# sourceMappingURL=ExchangeHorizontal.jsx.map