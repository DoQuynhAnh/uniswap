import { QRCodeErrorCorrectionLevel } from 'qrcode';
import { PropsWithChildren } from 'react';
import { ColorTokens } from 'tamagui';
export type BaseQRProps = {
    ecl?: QRCodeErrorCorrectionLevel;
    size: number;
    color: string;
};
type QRCodeDisplayProps = BaseQRProps & {
    encodedValue: string;
    containerBackgroundColor?: ColorTokens;
};
export declare const QRCodeDisplay: import("react").MemoExoticComponent<({ encodedValue, ecl, size, color, containerBackgroundColor, children, }: PropsWithChildren<QRCodeDisplayProps>) => JSX.Element>;
export {};
//# sourceMappingURL=QRCodeDisplay.d.ts.map