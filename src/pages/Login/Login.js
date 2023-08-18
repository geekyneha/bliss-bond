// import React, { useState } from "react";
// import style from "./login.module.css";
// import { TextField } from "@mui/material";
// import { Button } from "@mui/material";
// import { Box } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { useFormik } from "formik";



import React from "react";
import style from "./login.module.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Formik, Form, ErrorMessage } from "formik";
import { validationSchema } from "../../schema";



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
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);

  const showLogin = () => {
    setIsLogin(true);
    console.log(isLogin);
  };

  const handleFormSubmit = (values) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
  };

  return (
    <div className={style["outer-continer"]}>
      <div className={style["login-continer"]}>
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
              <p>
                Don't have an Account?{" "}
                <span onClick={showLogin} className={style["pink"]}>
                  Login
                </span>
              </p>
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

