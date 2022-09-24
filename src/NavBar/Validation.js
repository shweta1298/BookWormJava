import * as Yup from "yup";

export const LoginUpSchema = Yup.object({
  emailId: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password")
});