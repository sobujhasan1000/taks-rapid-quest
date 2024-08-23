"use client";
import React from "react";
import { Bar } from "react-chartjs-2";

const CustomerAddTime = ({ data }) => {
  // Prepare labels and data for the chart
  const labels = data.map((item) => `${item._id.month}/${item._id.year}`);
  const customerCounts = data.map((item) => item.newCustomers);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "New Customers Added",
        data: customerCounts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-2">
      <div className="bg-white shadow-lg rounded-lg p-2">
        <h2>New Customers Added</h2>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CustomerAddTime;
