/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import * as d3 from 'd3';

import createData from './createData';


class App extends Component {
  state= {
    data: createData(100),
    chartWidth: 800,
    chartHeight: 400,
  }

  componentDidMount() {
    const { chartWidth, chartHeight, data } = this.state;


    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight);

    // const force = d3.forceSimulation()
    //   .nodes(data);

    const node = svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 2)
      .attr('r', (d) => d.raduis / 20)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y);
  }

  render() {
    return (
      <div className="App">
        <div className="chart" id="chart">Hello</div>
      </div>
    );
  }
}

export default App;
