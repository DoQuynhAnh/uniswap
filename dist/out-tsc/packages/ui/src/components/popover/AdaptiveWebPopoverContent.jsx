import { Popover } from 'tamagui';
import { WebBottomSheet } from 'ui/src/components/modal/AdaptiveWebModal';
/**
 * AdaptiveWebPopoverContent is a responsive popover component that adapts to different screen sizes.
 * On larger screens, it renders as a popover.
 * On smaller screens (mobile devices), it adapts into a bottom sheet.
 */
export function AdaptiveWebPopoverContent({ children, isOpen, webBottomSheetProps, ...popoverContentProps }) {
    return (<>
      <Popover.Content {...popoverContentProps}>{children}</Popover.Content>
      <Popover.Adapt when="sm">
        <WebBottomSheet isOpen={isOpen} {...(webBottomSheetProps || {})}>
          <Popover.Adapt.Contents />
        </WebBottomSheet>
      </Popover.Adapt>
    </>);
}
//# sourceMappingURL=AdaptiveWebPopoverContent.jsx.map