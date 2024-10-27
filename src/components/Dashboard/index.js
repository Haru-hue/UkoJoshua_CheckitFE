import { useEffect, useState } from "react";
import { DataCard } from "../cards/DataCard";
import { Table } from "../table/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCapsule, fetchCapsules } from "@/store/features/capsuleSlice";
import { LayoutView } from "../layout";

export const Dashboard = () => {
  const [screen, setScreen] = useState("");
  const [listCapsules, setListCapsules] = useState([]);
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

  const newCapsule = {
    capsule_id: "C101",
    capsule_serial: "Dragon 1",
    status: "active",
  };

  const handleScreen = (name) => {
    setScreen(name);
  }

  useEffect(() => {
    switch (screen) {
      case "active":
        setListCapsules(capsules?.items?.filter((item) => item?.status === "active"));
        break;
      case "destroyed":
        setListCapsules(capsules?.items?.filter((item) => item?.status === "destroyed"));
        break;
      default:
        setListCapsules(capsules?.items);
        break;
    }
  }, [screen, capsules]);

  const testAddCapsule = () => {
    console.log("Testing");
    dispatch(addCapsule(newCapsule));
  };

  return (
    <LayoutView>
      <section className="flex flex-col gap-20 p-2">
        <div className="grid grid-cols-3 gap-10">
          <DataCard title={"Total Capsules"} data={capsules?.items?.length} onClick={() => handleScreen('')} screen={screen} />
          <DataCard
            title={"Total Active Capsules"}
            data={activeCapsules?.length}
            onClick={() => handleScreen('active')}
            screen={screen}
          />
          <DataCard
            title={"Total Destroyed Capsules"}
            data={destroyedCapsules?.length}
            onClick={() => handleScreen('destroyed')}
            screen={screen}
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
          <button onClick={testAddCapsule}>Filter</button>
        </div>
        <Table data={listCapsules} />
      </section>
    </LayoutView>
  );
};
