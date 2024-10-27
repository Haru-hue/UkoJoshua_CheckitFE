import * as Yup from 'yup';

const capsuleSchema = Yup.object({
  status: Yup.string().required(),
  original_launch: Yup.date().required(),
  type: Yup.string().required(),
});

test('validates form schema correctly', async () => {
  await expect(capsuleSchema.isValid({
    status: '',
    original_launch: 'invalid-date',
    type: '',
  })).resolves.toBe(false); // Should be invalid with missing data

  await expect(capsuleSchema.isValid({
    status: 'active',
    original_launch: '2023-05-20',
    type: 'Dragon',
  })).resolves.toBe(true); // Should be valid with correct data
});