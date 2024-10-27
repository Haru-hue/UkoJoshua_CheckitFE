import useDisclosure from "@/utils/hooks/useDisclosure";
import { Modal } from "../modal";
import { Field, FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateCapsule } from "@/store/features/capsuleSlice";
import { validateSchema } from "./addCapsule";

export const EditCapsuleModal = ({ rowData }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      capsule_id: rowData?.capsule_id || "",
      status: rowData?.status || "",
      original_launch: rowData?.original_launch?.split("T")[0] || "",
      capsule_serial: rowData?.capsule_serial || "",
    },
    onSubmit: (values) => {
      dispatch(updateCapsule(values));
      onClose();
    },
    validate: validateSchema,
  });

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <button onClick={onOpen}>Edit</button>
      <Modal
        header="Edit Capsule"
        isOpen={isOpen}
        onClose={onClose}
        className="bg-white rounded-xl"
      >
        <h4 className="text-lg py-2">Capsule Details</h4>
        <FormikProvider value={formik}>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <label className="block text-gray-700 text-sm pb-1">
                Capsule ID:*{" "}
              </label>
              <Field onBlur={formik.handleBlur} name="capsule_id" placeholder="Capsule ID" />
              {formik.touched.capsule_id && formik.errors.capsule_id && (
                <p className="text-red-500 text-xs pt-1">{formik.errors.capsule_id}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm pb-1">
                Status{" "}
              </label>
              <Field as="select" placeholder="Select status" name="status">
                <option disabled>Select status</option>
                <option value="active">Active</option>
                <option value="destroyed">Destroyed</option>
                <option value="retired">Retired</option>
                <option value="unknown">Unknown</option>
              </Field>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm pb-1">
                Original launch date:*{" "}
              </label>
              <Field
                type="date"
                min="2010-12-08"
                max={today}
                name="original_launch"
              />
              {formik.touched.original_launch && formik.errors.original_launch && (
                <p className="text-red-500 text-xs pt-1">{formik.errors.original_launch}</p>
              )}
            </div>
          </div>
        </FormikProvider>
        <div className="flex gap-4 items-center pt-5">
          <button
            disabled={!formik.isValid}
            className="bg-stone-700 text-white py-2 px-6 rounded-lg disabled:bg-stone-400 disabled:cursor-not-allowed"
            onClick={formik.handleSubmit}
          >
            Edit Capsule
          </button>
          <button
            className="bg-slate-500 text-slate-950 py-2 px-6 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};