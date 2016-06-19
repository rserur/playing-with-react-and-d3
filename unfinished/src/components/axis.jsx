import React from 'react';
import d3 from 'd3';

export default class Axis extends React.Component {

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    var node = this.refs.axis;
    // d3 granted access to DOM to render axis, 
    // bt only when component is mounted or updated by React
    var axis = d3.svg.axis().orient(this.props.orient).ticks(5).scale(this.props.scale);
    d3.select(node).call(axis);    
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}