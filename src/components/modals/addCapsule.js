import useDisclosure from "@/utils/hooks/useDisclosure";
import { Modal } from "../modal";
import { Field, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCapsule } from "@/store/features/capsuleSlice";

export const validateSchema = Yup.object().shape({
  capsule_id: Yup.string().required("Capsule ID is required"),
  original_launch: Yup.date().required("Date is required"),
});

export const AddCapsuleModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0];

  const formik = useFormik({
    initialValues: {
      capsule_id: "",
      status: "",
      original_launch: null,
    },
    onSubmit: (values) => {
      const newCapsule = {
        capsule_id: values.capsule_id,
        status: !values?.status?.trim() ? "unknown" : values?.status,
        original_launch: values.original_launch,
        type: values?.type
      };
      dispatch(addCapsule(newCapsule));
      onClose();
    },
    validateOnChange: true,
    validationSchema: validateSchema,
    validateOnMount: true,
  });

  return (
    <>
      <button
        className="whitespace-nowrap rounded-lg py-2 px-6 bg-slate-300 font-semibold text-slate-950 flex-field"
        onClick={onOpen}
      >
        Add Capsule
      </button>
      <Modal
        header="Add Capsule"
        isOpen={isOpen}
        onClose={onClose}
        className="bg-white rounded-xl min-w-96"
      >
        <h4 className="text-lg py-2">Capsule Details</h4>
        <FormikProvider value={formik}>
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div>
              <label className="block text-gray-700 text-sm pb-1">
                Capsule ID:*{" "}
              </label>
              <Field onBlur={formik.handleBlur}  name="capsule_id" placeholder="Capsule ID" />
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
            <div>
              <label className="block text-gray-700 text-sm pb-1">
                Type:
              </label>
              <Field onBlur={formik.handleBlur} name="type" placeholder="Type" />

            </div>
            <div>
              <label className="block text-gray-700 text-sm pb-1">
                Original Launch Date:*{" "}
              </label>
              <Field
                type="date"
                min="2010-12-08"
                max={today}
                name="original_launch"
                placeholder="Capsule ID"
                onBlur={formik.handleBlur}
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
            Add Capsule
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
