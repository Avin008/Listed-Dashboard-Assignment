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
        backgroundColor: "#9BDD7C",
        borderColor: "#9BDD7C",
        tension: 0.5,
      },
      {
        label: "User",
        data: data.map((x: any) => x.userLost),
        backgroundColor: "#E9A0A0",
        borderColor: "#E9A0A0",
        tension: 0.5,
      },
    ],
  });

  const options: any = {
    maintainAspectRatio: true,
    aspectRatio: 3,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
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
