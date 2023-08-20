import * as yup from 'yup'

const passwordRules =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
export const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password : yup.string().min(5).matches(passwordRules, { message :"Create a strong password"}).required("password is required")
  });