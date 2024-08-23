import React from "react";

const info = [
  { title: "User Number", value: "5000" },
  { title: "Total Sales", value: "400" },
  { title: "Rejected Products", value: "3000" },
  { title: "Active Customers", value: "2000" },
];

const SmallCard = async () => {
  // const res = await fetch(`${process.env.BACKEND_URL}/users`);
  // const users = await res.json();
  // console.log(users);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {info.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
          <p className="text-2xl font-bold text-blue-600"> {item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default SmallCard;
