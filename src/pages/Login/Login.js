import React from "react";
import style from "./login.module.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Formik, Form } from "formik";
import { validationSchema } from "../../schema";
import Axios  from "axios";
import {  ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#fe6180",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});




const Login = () => {
  // const [isSignUp, setIsSignUp] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const navigate=useNavigate();

  const showLogin = () => {
    setIsLogin(!isLogin);
    console.log(isLogin);
  };

  const getUsers= async ()=>{

    try{
      const response= await Axios.get("https://mockdata-1hd6.onrender.com/user")
      return response.data
    }
    catch(error){
      throw error
    }

  }

  const handleFormSubmit = async (values) => {
    const users = await getUsers();
    const userExists = users.some((user) => user.email.trim().toLowerCase() === values.email.trim().toLowerCase());
  
    if (!userExists ) {
      try {
        // Perform the POST request to add the new user.
        const response = await Axios.post("https://mockdata-1hd6.onrender.com/user", {
          email: values.email,
          password: values.password,
        });
  
        if (response.status === 201) {
          console.log("Form submitted with values:", values);
          toast.success('Form submitted successfully');
          navigate("/")

        } else {
          toast.error("User creation failed.");
          // Handle failure (e.g., show an error message).
        }
      } catch (error) {
        console.error("An error occurred while adding a new user:", error);
        toast.error('An error occurred while adding a new user');
        // Handle the error accordingly.
      }
    } else {
      toast.warn("User already exists");
   
      
      // Handle the case where the user already exists (e.g., show an error message).
    }
  };
  

  return (
    <div className={style["outer-continer"]}>
      <ToastContainer />
      <div className={style["login-container"]}>
        {isLogin ? <h1>Welcome Back</h1> : <h1>Create Your Account</h1>}
        <Formik
          initialValues={{ email: "" , password:""}}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {(formik) => (
            <Form className={style["form"]}>
           <div className={style["margin"]}>
           <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                className={style["input"]}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
           </div>
              <TextField 
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className={style["input"]}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              />
              <Box mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                  className={style["button"]}
                >
                  Continue
                </Button>
              </Box>
             <div className={style["user"]}> <p>
                Don't have an Account?</p>
                <div onClick={showLogin} className={style["pink"]}>
                  {isLogin? <span>sign up</span>: <span>Log in</span>}
                </div>
              </div>
              <div className={style["divider-container"]}>
                <hr className={style["divider"]} />
                <span className={style["or-text"]}>Or</span>
                <hr className={style["divider"]} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

