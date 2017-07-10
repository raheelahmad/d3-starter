import * as d3 from 'd3'
import * as styles from '../styles/index.css'

const margin = { left: 20, top: 20, bottom: 20, right: 20 },
      width = 900 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom

function renderChart(chart) {
    chart.append('text')
        .text('Render some viz!')
        .style('fill', '#223')
}

const svg = d3.select('body')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

const chart = svg.append('g')
    .attr('class', 'chart')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

renderChart(chart)
