import * as yup from 'yup'

const passwordRules =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
export const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password : yup.string().min(8).matches(passwordRules, {message:"Create a string password"}).required("password is required")
  });