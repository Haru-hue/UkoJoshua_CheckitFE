import { useEffect } from "react";
import { DataCard } from "../cards/DataCard";
import { Table } from "../table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapsules } from "@/store/features/capsuleSlice";
import { LayoutView } from "../layout";

export const Dashboard = () => {
  const capsules = useSelector((state) => state.capsules);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCapsules());
  }, []);

  const activeCapsules = capsules?.items?.filter(
    (item) => item?.status === "active"
  );
  const destroyedCapsules = capsules?.items?.filter(
    (item) => item?.status === "destroyed"
  );

  return (
    <LayoutView>
      <section className="flex flex-col gap-20 p-2">
        <div className="grid grid-cols-3 gap-10">
          <DataCard title={"Total Capsules"} data={capsules?.items?.length} />
          <DataCard
            title={"Total Active Capsules"}
            data={activeCapsules?.length}
          />
          <DataCard
            title={"Total Destroyed Capsules"}
            data={destroyedCapsules?.length}
          />
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
    </LayoutView>
  );
};
