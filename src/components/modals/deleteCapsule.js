import { deleteCapsule } from "@/store/features/capsuleSlice";
import { useDispatch } from "react-redux";

export const DeleteCapsuleButton = ({rowData}) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(deleteCapsule(rowData?.capsule_serial))}>
      Delete
    </button>
  );
};
