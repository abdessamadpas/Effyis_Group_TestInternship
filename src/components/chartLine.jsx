import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const options = {
  scales: {
    x: {
      grid: {
        color: "white",
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        color: "#BEC0CA",
        padding: 10,
      },
    },
    y: {
      ticks: {
        color: "#BEC0CA",
        stepSize: 20000,
        callback: function (value, index, values) {
          return value >= 1000 ? value / 1000 + "K" : value;
        },
      },
      grid: {
        color: "transparent",

        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false
    }},

  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  elements: {
    bar: {
      //   backgroundColor: "red",
      //   borderWidth: 0,
    },
  },
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Sept 10",
    "Sept 11",
    "Sept 12",
    "Sept 13",
    "Sept 14",
    "Sept 15",
    "Sept 16",
  ],
  datasets: [
    {
      barThickness: 20,
      maxBarThickness: 13,
      minBarLength: 2,
      backgroundColor: "#EEF0FA",
      data: [100000, 100000, 100000, 40000, 100000, 60000],
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      margin: 10,
    },
  ],
};

function ChartLine() {
  return <Bar data={data} options={options} />;
}

export default ChartLine;
