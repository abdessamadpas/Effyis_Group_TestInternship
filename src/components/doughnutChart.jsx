import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
ChartJS.register(ArcElement, Title, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [3],
        backgroundColor: ["#EEF0FA"],
        borderColor: ["#EEF0FA"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className=" w-52">
      <Doughnut data={data} options={options} />
    </div>
  );
}
