import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "../../component/Input";
import Btns from "../../component/Btns";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/config.js";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  console.log("Login Form value aye", form);

  const loginHandlerValue = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const loginHandler = async () => {
    try {
      // Signed in
      let response = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password,
      );
      console.log(response);
      if (response.user) {
        toast.success("Login SuccessFully");
        navigate("/blog")
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.code);
      console.log(error.message);
    }
    console.log("Email", form.email);
    console.log("Password", form.password);
  };
  const signInWithGoogle = async () => {

    try {
      const provider = new GoogleAuthProvider();
      let response = await signInWithPopup(auth, provider);

      console.log(response);

      if (response.user) {
        toast.success("user signIn successfully!");
        navigate("/blog")
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        p: 2,
        color: "white",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 450,
          p: 4,
          borderRadius: 3,
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Login Account
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "gray",
            mb: 3,
          }}
        >
          Login to your account{" "}
        </Typography>
        {/* SIgnup Inputs */}
        {/* <Input handler={signUpHanlderValue} label={"Full Name"} type={"text"} /> */}
        <Input
          handler={loginHandlerValue}
          label={"Enter Your Email"}
          type={"email"}
          id={"email"}
        />
        <Input
          handler={loginHandlerValue}
          label={"Enter your Password"}
          type={"password"}
          id={"password"}
        />
        <ToastContainer />
        {/* Button signUp */}
        <Btns icon={<GoogleIcon />} handler={signInWithGoogle} btnTitle={"Sign In With Google"} />

        <Btns handler={loginHandler} btnTitle={"Login"} />

        <Link to={"/signup"}>
          <Typography
            sx={{
              margin: "10px 0",
            }}
            className="text-center"
          >
            Go to Sign Up Page
          </Typography>
        </Link>
      </Paper>
    </Box>
  );
};

export default Login;
