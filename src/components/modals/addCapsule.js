import useDisclosure from "@/utils/hooks/useDisclosure";
import { Modal } from "../modal";
import { Field, FormikProvider, useFormik } from "formik";
import Yup from "yup";

const validateSchema = Yup?.object().shape({
  capsule_id: Yup.string().required("Capsule ID is required"),
  original_launch: Yup.date().required("Date is required"),
});

export const AddCapsuleModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
      onClose();
    },
    validateOnChange: true,
    validationSchema: validateSchema,
    validateOnMount: true,
  });

  const today = new Date().toISOString().split("T")[0];

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
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <label className="block text-gray-700 text-sm pb-1">
                Capsule ID:*{" "}
              </label>
              <Field name="capsule_id" placeholder="Capsule ID" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm pb-1">
                Status{" "}
              </label>
              <Field name="capsule_id" placeholder="Capsule ID" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm pb-1">
                Capsule ID:*{" "}
              </label>
              <Field
                type="date"
                min="2010-12-08"
                max={today}
                name="capsule_id"
                placeholder="Capsule ID"
              />
            </div>
          </div>
        </FormikProvider>
        <div className="flex gap-4 items-center py-5">
          <button disabled={!formik.isValid} className="bg-zinc-800">Add User</button>
          <button>Cancel</button>
        </div>
      </Modal>
    </>
  );
};
