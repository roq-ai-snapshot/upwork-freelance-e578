import * as yup from 'yup';

export const agencyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  owner_id: yup.string().nullable().required(),
});
