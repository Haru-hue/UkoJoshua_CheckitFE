import useDisclosure from "@/utils/hooks/useDisclosure";
import { Modal } from "../modal";
import { Field, FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateCapsule } from "@/store/features/capsuleSlice";

export const EditCapsuleModal = ({ rowData }) => {
    const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      capsule_id: rowData?.capsule_id || "",
      status: rowData?.status || "",
      original_launch: rowData?.original_launch || "",
      capsule_serial: rowData?.capsule_serial || "",
    },
    onSubmit: (values) => {
      dispatch(updateCapsule(values))
      onClose();
    },
    validate: (values) => {
      const errors = {};
      if (!values.capsule_id) {
        errors.capsule_id = "Required";
      }
      return errors;
    },
  });

  console.log(rowData);

  return (
    <>
      <button onClick={onOpen}>Edit</button>
      <Modal
        header="Add Capsule"
        isOpen={isOpen}
        onClose={onClose}
        className="bg-white rounded-xl p-4"
      >
        <h4 className="text-lg py-2">Capsule Details</h4>
        <FormikProvider value={formik}>
          <div className="grid grid-cols-2 gap-10 pt-4">
            <Field name="capsule_id" placeholder="Capsule ID" />
            <Field name="status" placeholder="Capsule ID" />
            <Field
              className="col-span-2"
              name="original_launch"
              placeholder="Capsule ID"
            />
          </div>
        </FormikProvider>
        <div className="flex gap-4 items-center py-5">
          <button onClick={formik.handleSubmit}>Edit Capsule</button>
          <button>Cancel</button>
        </div>
      </Modal>
    </>
  );
};
