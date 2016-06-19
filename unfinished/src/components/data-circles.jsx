import React from 'react';

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 2,
      // key is required by React for 
      // diffing btwn identical sibling components
      key: index
    };
    return <circle {...circleProps} />;
  };
};

export default (props) => {
  // g is svg equivalent of div
  return <g>{ 
    // mapping of the data and rendering a circle for each one
    props.data.map(renderCircles(props)) 
  }</g>
}