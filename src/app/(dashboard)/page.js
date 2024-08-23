"use server";
import SmallCard from "@/app/Components/CardSmall/SmallCard";
import BarChart from "@/app/Components/Chart/BarChart";
import React from "react";

export default async function Home() {
  try {
    const res = await fetch(
      "https://rapid-quiet.vercel.app/api/v1/total-sales",
      {
        cache: "no-store", // Disable caching if you want fresh data on every load
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const salesData = await res.json();
    // console.log(salesData);

    // Assuming salesData looks like:
    // [{ _id: { year: 2023, month: 8 }, totalSales: 5000 }, ...]

    // Prepare data for the chart
    const labels = salesData.map(
      (item) => `${item._id.month}/${item._id.year}`
    );
    const data = salesData.map((item) => item.totalSales);
    console.log(data);

    return (
      <div>
        <SmallCard />
        <BarChart labels={labels} data={data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // return <div>Failed to load data.</div>;
  }
}
