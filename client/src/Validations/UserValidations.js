import * as yup from "yup";

export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Not valid email").required("email is req"),
  password: yup.string().min(4).max(20).required("password "),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password don't match")
    .required(),
});
