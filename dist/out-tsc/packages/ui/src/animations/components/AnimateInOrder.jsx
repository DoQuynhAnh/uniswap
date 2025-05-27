import { useEffect, useState } from 'react';
import { Flex } from 'ui/src/components/layout';
export const AnimateInOrder = ({ children, index, animation = 'bouncy', enterStyle = { opacity: 0, scale: 0.8 }, exitStyle = { opacity: 0, scale: 0.8 }, delayMs = 150, ...rest }) => {
    return (<Delay by={index * delayMs}>
      <Flex key={`animate-${index}`} animation={animation} enterStyle={enterStyle} exitStyle={exitStyle} {...rest}>
        {children}
      </Flex>
    </Delay>);
};
const Delay = ({ children, by }) => {
    const [done, setDone] = useState(false);
    useEffect(() => {
        const showTimer = setTimeout(async () => {
            setDone(true);
        }, by);
        return () => clearTimeout(showTimer);
    }, [by]);
    return done ? <>{children}</> : null;
};
//# sourceMappingURL=AnimateInOrder.jsx.map