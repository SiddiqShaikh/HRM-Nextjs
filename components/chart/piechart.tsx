'use client'
import { Chart } from "react-google-charts";

const data = [
    ['Leave Type', 'Days'],
    ['Sick Leaves', 5],
    ['Annual Leaves', 25],
    
  ];

  const options = {
    pieHole: 0.8, // Create a donut chart
    legend: {
      position: 'bottom', // Use labeled legend
        alignment: 'center', // Align the legend to the center
        labeledValueText: true,
      textStyle: {
        color: 'blue', // Customize the text color
        fontSize: 12, // Customize the text size
      },
    },
    pieSliceText: 'none', // Hide the text inside the slices
    colors: ['#0088FE', '#00C49F', '#FFBB28'], // Customize slice colors
    chartArea: {
      left: "10%",
      top: "10%",
      bottom: "10%",
      right: "10%",
      width: "100%",
      height: "80%",
    },
    pieSliceTextStyle: {
        color: 'white',
        fontSize: '13',
        top: 10,
        left: 50,
        position: 'start',
      },

    // If you want to add any custom CSS styling, you can do so using the className property
    // or by targeting the SVG elements created by the chart in your CSS.
  };


export default function PieChart() {
  return (
    <div className="relative h-[300px]"> {/* Adjust width and height as needed */}
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-600">Total Leave</p>
        <p className="text-3xl font-bold text-gray-800">16</p>
      </div>
    </div>
  </div>

  );
}