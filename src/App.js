/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import * as d3 from 'd3';
import dataJson from './data.json';
// import createData from './createData';


class App extends Component {
  state= {
    data: dataJson,
    chartWidth: 800,
    chartHeight: 800,
  }

  componentDidMount() {
    const { chartWidth, chartHeight, data } = this.state;


    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight);

    // const force = d3.forceSimulation()
    //   .nodes(data);

    const myColor = d3.scaleLinear().domain([d3.min(data.map((d) => d.diffRate)), d3.max(data.map((d) => d.diffRate))])
      .range(['red', 'green']);
    console.log(data);
    const node = svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'node bubble')
      .attr('fill', (d) => myColor(d.diffRate))
      .attr('stroke-width', 2)
      .attr('r', (d) => d.raduis / 20)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y);


    this.createSimulation();
  }

  createSimulation = () => {
    const { data } = this.state;

    const forceX = d3
      .forceX()
      .x((d) => 400)
      .strength(1);

    const forceY = d3
      .forceY()
      .y((d) => d.diffRate)
      .strength(1);

    d3.forceSimulation(data)
      .force('collide', d3.forceCollide().radius((d) => d.raduis / 20 + 5).strength(1))
      .force('x', forceX)
      .force('y', forceY)
      .alpha(0.1) // small alpha to have the elements move at a slower pace
      .on('tick', () => {
        // call the tick function running the simulation
        d3.selectAll('.bubble').attr(
          'transform',
          (d) => `translate(${d.x} ${d.y})`,
        );
      });
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
