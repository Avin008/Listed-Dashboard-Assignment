"use client";

import { useState } from "react";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale);

const LineChart = ({ data }: { data: any }) => {
  const [chartData, setChartData] = useState({
    labels: data.map((data: any) => data.year),
    datasets: [
      {
        label: "Guest",
        data: data.map((x: any) => x.userGained),
      },
      {
        label: "User",
        data: data.map((x: any) => x.userGained),
      },
    ],
  });

  const options: any = {
    maintainAspectRatio: true,
    aspectRatio: 3,
    plugins: {
      legend: {
        align: "end",
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxHeight: 8,
          padding: 15,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
