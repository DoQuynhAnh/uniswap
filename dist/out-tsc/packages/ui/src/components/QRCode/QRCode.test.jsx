import { cleanup, render } from '@testing-library/react-native';
import { QRCode } from 'ui/src/components/QRCode/QRCode';
import { SharedUIUniswapProvider } from 'ui/src/test/render';
const qrCodeValue = ['s', 'oneSizeBiggerValue'];
const sizes = [100, 200];
const ecls = ['L', 'M', 'Q', 'H'];
function generateQRCodeTestCases() {
    const testCases = [];
    for (const value of qrCodeValue) {
        for (const size of sizes) {
            for (const ecl of ecls) {
                testCases.push([value, size, ecl]);
            }
        }
    }
    return testCases;
}
describe('QRCode', () => {
    it.each(generateQRCodeTestCases())('renders the QRCode correctly for value "%s", size %d, and ecl %s', (qrCodeValue, size, ecl) => {
        const tree = render(<SharedUIUniswapProvider>
          <QRCode value={qrCodeValue} overlayColor="#FF0000" backgroundColor="green" size={size} color="orange" ecl={ecl}/>
        </SharedUIUniswapProvider>);
        expect(tree.toJSON()).toMatchSnapshot();
        cleanup();
    });
});
//# sourceMappingURL=QRCode.test.jsx.map