import React from 'react';
import Flex from '../containers/style';

const Container = (props) => {
  return(
    <Flex bgColor={props.bgColor}
          width={props.width}
          height={props.height}
          direction={props.direction}
          justify={props.justify}
          align={props.align}
          margin={props.margin}
          padding={props.padding}
          radius={props.radius}>
      {props.children}
    </Flex>
  );
}

export default Container 
