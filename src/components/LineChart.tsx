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
        data: data.map((x: any) => x.userLost),
      },
    ],
  });

  return (
    <Line
      data={chartData}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            align: "end",
            position: "top",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              boxHeight: 8,
              padding: 30,
            },
          },
        },
      }}
    />
  );
};

export default LineChart;
