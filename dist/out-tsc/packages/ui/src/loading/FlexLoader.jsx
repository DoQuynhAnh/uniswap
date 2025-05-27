import React from 'react';
import { Flex } from 'ui/src/components/layout';
export function FlexLoader({ repeat = 1, backgroundColor = '$neutral3', borderRadius = '$rounded12', width = '100%', height, ...props }) {
    return (<Flex className="FlexLoader">
      {new Array(repeat).fill(null).map((_, i) => (<React.Fragment key={i}>
          <Flex backgroundColor={backgroundColor} borderRadius={borderRadius} height={height} width={width} {...props}/>
        </React.Fragment>))}
    </Flex>);
}
//# sourceMappingURL=FlexLoader.jsx.map