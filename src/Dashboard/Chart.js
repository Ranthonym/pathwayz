import React from "react";

import CanvasJSReact from "../lib/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Chart extends React.Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    const options = {
      height: "250",
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "",
      },
      axisY: {
        title: "",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "stackedArea",
          name: "Anxious",
          showInLegend: true,
          dataPoints: [
            { x: new Date(2012, 1, 1), y: 6 },
            { x: new Date(2012, 1, 3), y: 8 },
            { x: new Date(2012, 1, 5), y: 3 },
            { x: new Date(2012, 1, 7), y: 9 },
            { x: new Date(2012, 1, 11), y: 4 },
            { x: new Date(2012, 1, 13), y: 5 },
            { x: new Date(2012, 1, 20), y: 6 },
            { x: new Date(2012, 1, 21), y: 0 },
            { x: new Date(2012, 1, 25), y: 5 },
            { x: new Date(2012, 1, 27), y: 0 },
          ],
        },
        {
          type: "stackedArea",
          name: "Happy",
          showInLegend: true,
          dataPoints: [
            { x: new Date(2012, 1, 1), y: 2 },
            { x: new Date(2012, 1, 3), y: 3 },
            { x: new Date(2012, 1, 5), y: 3 },
            { x: new Date(2012, 1, 7), y: 0 },
            { x: new Date(2012, 1, 11), y: 1 },
            { x: new Date(2012, 1, 13), y: 5 },
            { x: new Date(2012, 1, 20), y: 6 },
            { x: new Date(2012, 1, 21), y: 6 },
            { x: new Date(2012, 1, 25), y: 3 },
            { x: new Date(2012, 1, 27), y: 6 },
          ],
        },
        {
          type: "stackedArea",
          name: "Sad",
          showInLegend: true,
          dataPoints: [
            { x: new Date(2012, 1, 1), y: 2 },
            { x: new Date(2012, 1, 3), y: 3 },
            { x: new Date(2012, 1, 5), y: 3 },
            { x: new Date(2012, 1, 7), y: 2 },
            { x: new Date(2012, 1, 11), y: 1 },
            { x: new Date(2012, 1, 13), y: 5 },
            { x: new Date(2012, 1, 20), y: 6 },
            { x: new Date(2012, 1, 21), y: 0 },
            { x: new Date(2012, 1, 25), y: 3 },
            { x: new Date(2012, 1, 27), y: 10 },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          id="chart"
          options={options}
          onRef={(ref) => (this.chart = ref)}
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
