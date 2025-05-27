import { jsx as _jsx } from "react/jsx-runtime";
import { act, fireEvent } from '@testing-library/react-native';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { View } from 'react-native';
import { Flex } from 'ui/src';
import { ContextMenu } from 'uniswap/src/components/menus/ContextMenuV2.web';
import { ContextMenuTriggerMode } from 'uniswap/src/components/menus/types';
import { renderWithProviders } from 'uniswap/src/test/render';
describe('ContextMenu', () => {
    const mockMenuItems = [
        {
            label: 'Option 1',
            onPress: jest.fn(),
        },
        {
            label: 'Option 2',
            onPress: jest.fn(),
            showDivider: true,
        },
    ];
    it('renders without error', () => {
        const tree = renderWithProviders(_jsx(ContextMenu, { menuItems: mockMenuItems, triggerMode: ContextMenuTriggerMode.Secondary, isOpen: true, closeMenu: jest.fn(), openMenu: jest.fn(), children: _jsx(Flex, { children: "Trigger" }) }));
        expect(tree).toMatchSnapshot();
    });
    describe('opens the menu', () => {
        it('on right-click', () => {
            const { getByTestId, queryByText } = renderWithProviders(_jsx(ContextMenu, { menuItems: mockMenuItems, triggerMode: ContextMenuTriggerMode.Secondary, isOpen: true, closeMenu: jest.fn(), children: _jsx(View, { testID: "trigger", children: _jsx(Flex, { children: "Trigger" }) }) }));
            const trigger = getByTestId('trigger');
            act(() => {
                fireEvent(trigger, 'contextMenu', {
                    preventDefault: jest.fn(),
                    stopPropagation: jest.fn(),
                    clientX: 100,
                    clientY: 150,
                });
            });
            expect(queryByText('Option 1')).toBeTruthy();
            expect(queryByText('Option 2')).toBeTruthy();
        });
        it('on left-click', () => {
            const { getByTestId, queryByText } = renderWithProviders(_jsx(ContextMenu, { menuItems: mockMenuItems, triggerMode: ContextMenuTriggerMode.Primary, isOpen: true, closeMenu: jest.fn(), children: _jsx(View, { testID: "trigger", children: _jsx(Flex, { children: "Trigger" }) }) }));
            const trigger = getByTestId('trigger');
            act(() => {
                fireEvent(trigger, 'onMouseDown', {
                    preventDefault: jest.fn(),
                    stopPropagation: jest.fn(),
                    clientX: 100,
                    clientY: 150,
                });
            });
            expect(queryByText('Option 1')).toBeTruthy();
            expect(queryByText('Option 2')).toBeTruthy();
        });
    });
    describe('handles edge cases', () => {
        it('does not open the menu if no menuItems are provided', () => {
            const { getByTestId, queryByRole } = renderWithProviders(_jsx(ContextMenu, { menuItems: [], triggerMode: ContextMenuTriggerMode.Secondary, isOpen: true, closeMenu: jest.fn(), children: _jsx(View, { testID: "trigger", children: _jsx(Flex, { children: "Trigger" }) }) }));
            const trigger = getByTestId('trigger');
            act(() => {
                fireEvent.press(trigger);
            });
            const menu = queryByRole('menu');
            expect(menu).toBeFalsy();
        });
        it('does not crash if trigger element is not found', () => {
            const { queryByRole } = renderWithProviders(_jsx(ContextMenu, { menuItems: mockMenuItems, triggerMode: ContextMenuTriggerMode.Secondary, isOpen: true, closeMenu: jest.fn(), children: null }));
            const menu = queryByRole('menu');
            expect(menu).toBeFalsy();
        });
    });
});
//# sourceMappingURL=ContextMenuV2.web.test.js.map