import useDisclosure from "@/utils/hooks/useDisclosure";
import { Modal } from "../modal";
import { Field, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCapsule } from "@/store/features/capsuleSlice";

const validateSchema = Yup.object().shape({
  capsule_id: Yup.string().required("Capsule ID is required"),
  original_launch: Yup.date().required("Date is required"),
});

export const AddCapsuleModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
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
        status: !values?.status?.trim() ? 'unknown' : values?.status,
        original_launch: values.original_launch,
      }
      dispatch(addCapsule(newCapsule))
      onClose();
    },
    validateOnChange: true,
    validationSchema: validateSchema,
    validateOnMount: true,
  });

  return (
    <>
      <button onClick={onOpen}>Add Filter</button>
      <Modal
        header="Add Capsule"
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
              <Field name="capsule_id" placeholder="Capsule ID" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm pb-1">
                Status{" "}
              </label>
              <Field as='select' placeholder='Select status' name='status'>
                  <option disabled>Select status</option>
                  <option value='active'>Active</option>
                  <option value='destroyed'>Destroyed</option>
                  <option value='retired'>Retired</option>
                  <option value='unknown'>Unknown</option>
                </Field>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm pb-1">
                Capsule ID:*{" "}
              </label>
              <Field
                type="date"
                min="2010-12-08"
                max={today}
                name="original_launch"
                placeholder="Capsule ID"
              />
            </div>
          </div>
        </FormikProvider>
        <div className="flex gap-4 items-center pt-5">
          <button
            disabled={!formik.isValid}
            className="bg-stone-700 text-white py-2 px-6 rounded-lg disabled:bg-stone-400 disabled:cursor-not-allowed"
            onClick={formik.handleSubmit}
          >
            Add User
          </button>
          <button  className='bg-slate-500 text-slate-950 py-2 px-6 rounded-lg' onClick={onClose}>Cancel</button>
        </div>
      </Modal>
    </>
  );
};
