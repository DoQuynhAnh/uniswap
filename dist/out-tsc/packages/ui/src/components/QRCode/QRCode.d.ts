/// <reference types="react" />
import { BaseQRProps } from 'ui/src/components/QRCode/QRCodeDisplay';
export interface QRCodeProps extends BaseQRProps {
    value: string;
    backgroundColor?: string;
    overlayColor: string;
    quietZone?: number;
}
/**
 * Renders a QR code with custom colors, custom eyes, and more.
 *
 * @param value - The value to encode in the QR code
 * @param size - The size of the QR code
 * @param color - The color of the QR code
 * @param backgroundColor - The background color of the QR code
 * @param overlayColor - Additional color to overlay on top of the QR code
 * @param quietZone - The quiet zone of the QR code
 * @param ecl - The error correction level of the QR code
 */
export declare function QRCode({ value, size, color, backgroundColor: inputBackgroundColor, overlayColor, quietZone, ecl, }: QRCodeProps): JSX.Element | null;
//# sourceMappingURL=QRCode.d.ts.map