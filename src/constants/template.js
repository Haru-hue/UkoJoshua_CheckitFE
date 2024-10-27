import { deleteCapsule } from "@/store/features/capsuleSlice";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";

export const dateBodyTemplate = (rowData) => {
  return rowData?.original_launch ? dayjs(rowData?.original_launch).format("DD MMMM, YYYY"): 'TBD';
};

export const missionTemplate = (rowData) => {
  return rowData?.missions?.length;
};

export const deleteTemplate = (rowData) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(deleteCapsule(rowData?.capsule_serial))}>
      Delete
    </button>
  );
};
