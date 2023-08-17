import React from "react";
import style from "./login.module.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";

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
  return (
    <div className={style["outer-continer"]}>
      <div className={style["login-continer"]}>
        <h1>Create Your Account</h1>
        <p className={style["note"]}>
          Note that phone verification may be required for signup. Your number
          will only be used to verify your identity for security purposes.
        </p>

        <form action="" className={style["form"]}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            className={style["input"]}
          />
          <Box mt={2}>
            {" "}
            <Button
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
            Arleady Have an Account? <span>Login</span>
          </p>

          <div className={style["divider-container"]}>
            <hr className={style["divider"]} />
            <span className={style["or-text"]}>Or</span>
            <hr className={style["divider"]} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
