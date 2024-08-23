// RepeteCustomer.js
"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const RepeteCustomer = ({ data }) => {
  // Prepare data for the chart
  const labels = data.map((item) => {
    if (item._id.year && item._id.month) {
      return `${item._id.month}/${item._id.year}`;
    } else if (item._id.year) {
      return `${item._id.year}`;
    } else {
      return "Unknown";
    }
  });

  const repeatCustomerCounts = data.map((item) => item.repeatCustomerCount);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Repeat Customers",
        data: repeatCustomerCounts,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Count: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Period",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Customers",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-2">
      <div className="bg-white shadow-lg rounded-lg p-2">
        <h2>Repeat Customers</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default RepeteCustomer;
