import { useEffect, useState } from "react";
import { DataCard } from "../cards/DataCard";
import { Table } from "../table/Table";
import { useQuery } from "react-query";
import { fetchAllCapsules } from "@/pages/api/data";
import { Paginator } from "primereact/paginator";
import { useDispatch, useSelector } from "react-redux";
import { addCapsule, fetchCapsules } from "@/store/features/capsuleSlice";

export const Dashboard = () => {
  const capsules = useSelector((state) => state.capsules)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCapsules())
  }, [])

  console.log(capsules)

  return (
    <section>
      <div className="grid grid-cols-3 gap-10">
        <DataCard title={"Total Capsules"} data={capsules?.items?.length} />
        <DataCard title={"Total Active Capsules"} data={"21,324"} />
        <DataCard title={"Total Destroyed Capsules"} data={"21,324"} />
      </div>
      <div className="flex gap-10">
        <input
          className="border py-2 pr-6 pl-3 rounded-md"
          placeholder="status"
        />
        <input
          className="border py-2 pr-6 pl-3 rounded-md"
          placeholder="launch"
        />
        <input className="" placeholder="type" />
        <button>Filter</button>
      </div>
      <Table data={capsules?.items} />
    </section>
  );
};
