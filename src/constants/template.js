import { DeleteCapsuleButton } from "@/components/modals/deleteCapsule";
import { EditCapsuleModal } from "@/components/modals/editCapsule";
import { ViewCapsuleModal } from "@/components/modals/viewCapsule";
import dayjs from "dayjs";
import { Tag } from "primereact/tag";

export const serialBodyTemplate = (rowData) => {
  return <ViewCapsuleModal rowData={rowData}/>;
};

export const dateBodyTemplate = (rowData) => {
  return rowData?.original_launch
    ? dayjs(rowData?.original_launch).format("DD MMMM, YYYY")
    : "TBD";
};

export const statusBodyTemplate = (rowData) => {
  const status = rowData?.status;
  const getSeverity = (status) => {
    switch (status) {
      case "active":
        return "success"; // color should map to 'text-green-500'
      case "destroyed":
        return "danger"; // color should map to 'text-red-500'
      case "retired":
        return "warning"; // color should map to 'text-yellow-500'
      default:
        return "secondary"; // color should map to 'text-gray-400'
    }
  };

  return <Tag className="capitalize" value={status?.toUpperCase()} severity={getSeverity(status)} />;
};

export const missionTemplate = (rowData) => {
  return rowData?.missions?.length;
};

export const editTemplate = (rowData) => {
  return <EditCapsuleModal rowData={rowData} />;
};

export const deleteTemplate = (rowData) => {
  return <DeleteCapsuleButton rowData={rowData} />
};
