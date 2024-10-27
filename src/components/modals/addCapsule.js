import useDisclosure from "@/utils/hooks/useDisclosure";
import { Modal } from "../modal";
import { Field, FormikProvider, useFormik } from "formik";

export const AddCapsuleModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
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

  return (
    <>
      <button onClick={onOpen}>Add Filter</button>
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
            <Field name="capsule_id" placeholder="Capsule ID" />
            <Field
              className="col-span-2"
              name="capsule_id"
              placeholder="Capsule ID"
            />
          </div>
        </FormikProvider>
        <div className="flex gap-4 items-center py-5">
            <button>Add User</button>
            <button>Cancel</button>
        </div>
      </Modal>
    </>
  );
};
