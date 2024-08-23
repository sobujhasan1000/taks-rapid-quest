// page.js this is the entry point of application

"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
// bar chart start
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

// Import Pie chart
const Pie = dynamic(() => import("react-chartjs-2").then((mod) => mod.Pie), {
  ssr: false,
});

// const barData = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "GeeksforGeeks Bar Chart",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
// end barchart

// Pie chart data
const pieData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Pie Chart Example",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
const BarChart = ({ labels, data }) => {
  const barData = {
    labels,
    datasets: [
      {
        label: "Total Sales",
        data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  // console.log(barData);
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-2">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Total sales Chart
          </h2>
          <div className="h-80">
            <Bar data={barData} />
          </div>
        </div>

        {/* Pie Chart */}
        {/* <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Pie Chart</h2>
          <div className="w-2/2 h-80">
            <Pie data={pieData} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default BarChart;
