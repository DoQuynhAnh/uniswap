import { memo } from 'react';
import { QRCode } from 'ui/src/components/QRCode/QRCode';
import { Flex } from 'ui/src/components/layout';
import { useSporeColors } from 'ui/src/hooks/useSporeColors';
function AddressQRCode({ address, ecl, size, backgroundColor, color }) {
    const colors = useSporeColors();
    return (<QRCode backgroundColor={backgroundColor} color={color} ecl={ecl} overlayColor={colors.neutral1.val} size={size} value={address}/>);
}
const _QRCodeDisplay = ({ encodedValue, ecl = 'H', size, color, containerBackgroundColor, children, }) => {
    return (<Flex alignItems="center" backgroundColor={containerBackgroundColor} justifyContent="center" position="relative">
      <AddressQRCode address={encodedValue} backgroundColor={containerBackgroundColor} color={color} ecl={ecl} size={size}/>
      <Flex alignItems="center" backgroundColor="$transparent" borderRadius="$roundedFull" overflow="visible" pl="$spacing2" position="absolute" pt="$spacing2">
        {children}
      </Flex>
    </Flex>);
};
export const QRCodeDisplay = memo(_QRCodeDisplay);
//# sourceMappingURL=QRCodeDisplay.jsx.map