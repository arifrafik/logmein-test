import { Chart } from "react-google-charts";
import * as React from "react";

const options = {
  hAxis: {
    title: "Date"
  },
  vAxis: {
    title: "Stock Market Price vs Social Media Count"
  },
  series: {
    1: { curveType: "function" }
  }
};

const convertData = rawData => {
  let data = [];
  for (let index = 0; index < rawData.length; index++) {
    const element = rawData[index];
    let tmp = [element.date, element.stockMarketPrice, element.mediaCount];
    data.push(tmp);
  }
  data = data.reverse();
  data.unshift(["Date", "Stock Market Price", "Social Media Count"]);
  return data;
};

const ExampleChart = props => {
  let convertedData = convertData(props.data);
  console.table(convertedData);
  return (
    <Chart
      chartType="LineChart"
      data={convertedData}
      options={options}
      width="80%"
      height="400px"
      legendToggle
    />
  );
};

export default ExampleChart;
