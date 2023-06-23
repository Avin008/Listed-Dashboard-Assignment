"use client";

import { useState } from "react";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale);

const PieChart = ({ data }: { data: any }) => {
  const [chartData, setChartData] = useState({
    labels: data.map((data: any) => data.year),
    datasets: [
      {
        label: "Guest",
        data: data.map((x: any) => x.userGained),
      },
    ],
  });

  return (
    <Pie
      data={chartData}
      options={{
        radius: 80,
        aspectRatio: 2,
        plugins: {
          legend: { align: "center", position: "right" },
        },
      }}
    />
  );
};

export default PieChart;
