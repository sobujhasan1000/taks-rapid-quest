import BarChart from "@/app/Components/Chart/BarChart";
import React from "react";
import SalesGroth from "../Components/saleGroth/SalesGroth";
import CustomerAddTime from "../Components/CustomerAddTime/CustomerAddTime";
import RepeteCustomer from "../Components/RepeteCutomer/RepeteCustomer";

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

    // Prepare data for the chart
    const labels = salesData.map(
      (item) => `${item._id.month}/${item._id.year}`
    );
    const data = salesData.map((item) => item.totalSales);
    // console.log(data);

    // Fetch sales growth data
    const salesGrowthRes = await fetch(
      "https://rapid-quiet.vercel.app/api/v1/sales-growth",
      {
        cache: "no-store",
      }
    );

    if (!salesGrowthRes.ok) {
      throw new Error("Failed to fetch sales growth data");
    }

    const salesGrowthData = await salesGrowthRes.json();
    // console.log(salesGrowthData);

    const customerAddRes = await fetch(
      "https://rapid-quiet.vercel.app/api/v1/new-customers",
      {
        cache: "no-store",
      }
    );

    if (!customerAddRes.ok) {
      throw new Error("Failed to fetch customer addition data");
    }

    const customerAddData = await customerAddRes.json();

    // Fetch repeat customers data
    const repeatCustomerRes = await fetch(
      "https://rapid-quiet.vercel.app/api/v1/repeat-customers?timeFrame=monthly",
      {
        cache: "no-store",
      }
    );

    if (!repeatCustomerRes.ok) {
      throw new Error("Failed to fetch repeat customer data");
    }

    const repeatCustomerData = await repeatCustomerRes.json();
    // console.log(customerAddData);
    return (
      <div>
        <BarChart labels={labels} data={data} />
        <SalesGroth data={salesGrowthData} />
        <CustomerAddTime data={customerAddData} />
        <RepeteCustomer data={repeatCustomerData} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // return <div>Failed to load data.</div>;
  }
}
