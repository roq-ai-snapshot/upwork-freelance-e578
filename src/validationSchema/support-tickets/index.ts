import * as yup from 'yup';

export const supportTicketValidationSchema = yup.object().shape({
  subject: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
