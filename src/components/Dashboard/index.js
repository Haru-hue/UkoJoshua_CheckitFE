import { useEffect, useState } from "react";
import { DataCard } from "../cards/DataCard";
import { Table } from "../table/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCapsule, fetchCapsules } from "@/store/features/capsuleSlice";
import { LayoutView } from "../layout";
import { AddCapsuleModal } from "../modals/addCapsule";
import { Field, FormikProvider, useFormik } from "formik";

export const Dashboard = () => {
  const [screen, setScreen] = useState("all");
  const capsules = useSelector((state) => state.capsules);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      status: "",
      launch: "",
      type: "",
    },

  })

  useEffect(() => {
    dispatch(fetchCapsules());
  }, []);

  const activeCapsules = capsules?.items?.filter(
    (item) => item?.status === "active"
  );
  const destroyedCapsules = capsules?.items?.filter(
    (item) => item?.status === "destroyed"
  );

  const handleScreen = (name) => {
    setScreen(name);
  };

  const filteredCapsules = capsules?.items.filter((capsule) => {
    return (
      (formik.values.status
        ? capsule.status.toLowerCase().includes(formik.values.status.toLowerCase())
        : true) &&
      (formik.values.launch
        ? capsule.original_launch &&
          capsule.original_launch.includes(formik.values.launch)
        : true) &&
      (formik.values.type
        ? capsule.type &&
          capsule.type.toLowerCase().includes(formik.values.type.toLowerCase())
        : true) &&
      (screen === "active"
        ? capsule.status.toLowerCase().includes("active")
        : true) &&
      (screen === "all" ? capsule : true) &&
      (screen === "destroyed"
        ? capsule.status.toLowerCase() === "destroyed"
        : true)
    );
  });

  return (
    <LayoutView>
      <section className="flex flex-col gap-10 lg:gap-20 p-2">
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-10">
          <DataCard
            title={"Total Capsules"}
            data={capsules?.items?.length}
            onClick={() => handleScreen("all")}
            screen={screen}
            cardKey={"all"}
          />
          <DataCard
            title={"Total Active Capsules"}
            data={activeCapsules?.length}
            onClick={() => handleScreen("active")}
            screen={screen}
            cardKey={"active"}
          />
          <DataCard
            title={"Total Destroyed Capsules"}
            data={destroyedCapsules?.length}
            onClick={() => handleScreen("destroyed")}
            screen={screen}
            cardKey={"destroyed"}
          />
        </div>
        <FormikProvider value={formik}>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-5xl">
            <Field
              placeholder="Filter by status"
              name='status'
            />
            <Field name='launch' type="date" />
            <Field
              placeholder="Filter by type"
              name='type'
            />
            <AddCapsuleModal />
          </div>
        </FormikProvider>
        <Table data={filteredCapsules} />
      </section>
    </LayoutView>
  );
};
