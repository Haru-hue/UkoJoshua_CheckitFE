import useDisclosure from "@/utils/hooks/useDisclosure";
import { Modal } from "../modal";
import dayjs from "dayjs";
import { Tag } from "primereact/tag";

export const ViewCapsuleModal = ({ rowData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  return (
    <>
      <button onClick={onOpen}>{rowData?.capsule_id}</button>
      <Modal
        header="View Capsule"
        isOpen={isOpen}
        onClose={onClose}
        className="bg-white rounded-xl"
      >
        <h4 className="text-lg py-2">Capsule Details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-10 pt-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Capsule ID:
            </label>
            <p className="text-gray-900">{rowData?.capsule_id}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Capsule Name:
            </label>
            <p className="text-gray-900">{rowData?.capsule_serial}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Launch Year:
            </label>
            <p className="text-gray-900">
              {dayjs(rowData?.original_launch).format("DD MMM, YYYY")}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Status:
            </label>
            <p className="capitalize text-gray-900">
              <Tag
                className="capitalize"
                value={status?.toUpperCase()}
                severity={getSeverity(status)}
              />
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Type:
            </label>
            <p className="capitalize text-gray-900">{rowData?.type}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              No of Missions ({rowData?.missions?.length}):
            </label>
            <ul className="capitalize text-gray-900">
              {rowData?.missions?.length > 0 ? rowData?.missions?.map((item, idx) => {
                return (
                  <li key={idx} className="flex flex-col">
                    <p>{item?.name}</p>
                  </li>
                );
              }): 'No missions completed yet'}
            </ul>
          </div>
          <div></div>
        </div>
      </Modal>
    </>
  );
};
