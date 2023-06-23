"use client";

import { useState } from "react";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale);

const PieChart = ({ data }: { data: any }) => {
  const [chartData, setChartData] = useState({
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        label: "Guest",
        data: [10, 30, 60],
        backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
        borderWidth: 0,
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
          legend: {
            align: "center",
            position: "right",
            labels: {
              pointStyle: "circle",
              usePointStyle: true,
              padding: 30,
              font: { weight: "800" },
              color: "#000000",
            },
          },
        },
        responsive: true,
      }}
    />
  );
};

export default PieChart;
