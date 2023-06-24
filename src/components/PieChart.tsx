"use client";

import { useState } from "react";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { PieChartType } from "../../types";

ChartJS.register(CategoryScale);

const PieChart = ({ data }: { data: PieChartType[] }) => {
  const [chartData, setChartData] = useState({
    labels: data.map((x) => x.label),
    datasets: [
      {
        label: "Guest",
        data: data.map((x) => x.data),
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
              font: { weight: "800", family: "inter" },
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
