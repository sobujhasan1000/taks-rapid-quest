"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesGroth = ({ data }) => {
  // Prepare data for the chart
  const chartData = {
    labels: data.map((item) => item.period), // Labels for each period (e.g., "1/2022")
    datasets: [
      {
        label: "Sales Growth Rate (%)",
        data: data.map((item) => parseFloat(item.growthRate) || 0), // Growth rate for each period
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4, // For smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Growth Rate Over Time",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + "%"; // Add percentage sign to y-axis labels
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h1>Sales Growth Chart</h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SalesGroth;
