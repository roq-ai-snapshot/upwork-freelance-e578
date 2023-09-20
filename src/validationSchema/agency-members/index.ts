import * as yup from 'yup';

export const agencyMemberValidationSchema = yup.object().shape({
  joined_at: yup.date().required(),
  role: yup.string().required(),
  status: yup.string().required(),
  agency_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
