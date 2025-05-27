import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-native';
import { Text } from 'ui/src';
import { ActionSheetDropdown } from 'uniswap/src/components/dropdowns/ActionSheetDropdown';
import { ON_PRESS_EVENT_PAYLOAD } from 'uniswap/src/test/fixtures';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from 'uniswap/src/test/test-utils';
jest.mock('react-native', () => {
    const actualReactNative = jest.requireActual('react-native');
    // Extend the View component to mock measureInWindow
    const MockedView = actualReactNative.View;
    MockedView.prototype.measureInWindow = (callback) => {
        // Provide mock measurements
        const mockX = 0;
        const mockY = 0;
        const mockWidth = 100;
        const mockHeight = 50;
        callback(mockX, mockY, mockWidth, mockHeight);
    };
    return actualReactNative;
});
jest.mock('tamagui', () => {
    const actualTamagui = jest.requireActual('tamagui');
    return {
        ...actualTamagui,
        Portal: ({ children }) => children,
    };
});
const createOption = (key, label) => ({
    key,
    onPress: jest.fn(),
    render: () => _jsx(Text, { children: label }),
});
const options = [
    createOption('option1', 'Option 1'),
    createOption('option2', 'Option 2'),
    createOption('option3', 'Option 3'),
];
const openDropdown = async () => {
    const toggle = screen.getByTestId('dropdown-toggle');
    fireEvent.press(toggle, ON_PRESS_EVENT_PAYLOAD);
    // Wait until is open
    await waitFor(() => expect(screen.queryByTestId('dropdown-content')).toBeTruthy());
};
describe(ActionSheetDropdown, () => {
    it('should render', () => {
        const tree = render(_jsx(ActionSheetDropdown, { options: options }));
        expect(tree).toMatchSnapshot();
    });
    it('opens the dropdown when the toggle is pressed', async () => {
        render(_jsx(ActionSheetDropdown, { options: options }));
        // Should be closed by default
        expect(screen.queryByTestId('dropdown-content')).toBeNull();
        await openDropdown();
        // Should render all options
        options.forEach(({ key }) => expect(screen.queryByTestId(key)).toBeTruthy());
    });
    it('closes the dropdown after pressing on a backdrop', async () => {
        const { getByTestId } = render(_jsx(ActionSheetDropdown, { options: options }));
        await openDropdown();
        const backdrop = getByTestId('dropdown-backdrop');
        fireEvent.press(backdrop, ON_PRESS_EVENT_PAYLOAD);
        // Should be closed after pressing the backdrop
        await waitForElementToBeRemoved(() => screen.queryByTestId('dropdown-content'));
    });
    it('closes the dropdown after pressing on an option', async () => {
        const { getByTestId } = render(_jsx(ActionSheetDropdown, { options: options }));
        await openDropdown();
        const option = getByTestId('option1');
        fireEvent.press(option, ON_PRESS_EVENT_PAYLOAD);
        // Should be closed after pressing an option
        await waitForElementToBeRemoved(() => screen.queryByTestId('dropdown-content'));
    });
    it('calls the onPress function of the option after pressing on an option', async () => {
        const { getByTestId } = render(_jsx(ActionSheetDropdown, { options: options }));
        await openDropdown();
        const option = getByTestId('option3');
        fireEvent.press(option, ON_PRESS_EVENT_PAYLOAD);
        await waitFor(() => {
            var _a;
            // Should call the onPress function of the option
            expect((_a = options[2]) === null || _a === void 0 ? void 0 : _a.onPress).toHaveBeenCalledTimes(1);
        });
    });
});
//# sourceMappingURL=ActionSheetDropdown.test.js.map