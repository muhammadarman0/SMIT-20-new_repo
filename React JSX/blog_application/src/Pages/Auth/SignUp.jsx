import { React, useState } from "react";
import Input from "../../component/Input";
import { Box, Paper, Typography } from "@mui/material";
import Btns from "../../component/Btns";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth, { db } from "../../firebase/config.js";
import { ToastContainer, toast } from "react-toastify";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const saveDataFordb = async (name = "", data) => {
    try {
      const docRef = doc(db, "users", data.uid);

      await setDoc(docRef, {
        userName: data.displayName ? data.displayName : name,
        email: form.email,
        imgUrl: data.photoURL ? data.photoURL : "",
        role: "user",
      });

      console.log("Document saved:", data.uid);
    } catch (e) {
      console.error("Error adding document:", e);
    }
  };

  const signUpHanlderValue = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  const signUpHandler = async () => {
    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,
      );

      console.log(response);
      saveDataFordb(form.fullName, response.user);
      if (response.user) {
        toast.success("user signup successfully!");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.code);

      if (
        error.message == "Firebase: Error (auth/email-already-in-use)" ||
        error.code == "auth/email-already-in-use"
      ) {
        toast.error("Email already Exist!");
      }
    }
    //  SweetAlert("success", "Login SuccessFully");
  };

  const signUpWithGoogleHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      let response = await signInWithPopup(auth, provider);

      console.log(response);

      if (response.user) {
        toast.success("user signup successfully!");
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
          Create Account
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "gray",
            mb: 3,
          }}
        >
          Sign up to create your account
        </Typography>
        {/* SIgnup Inputs */}
        <Input handler={signUpHanlderValue} label={"Full Name"} type={"text"} id={"username"} />
        <Input
          handler={signUpHanlderValue}
          label={"Enter Your Email"}
          type={"email"}
          id={"email"}
        />
        <Input
          handler={signUpHanlderValue}
          label={"Enter your Password"}
          type={"password"}
          id={"password"}
        />
        <ToastContainer />
        {/* Button signUp */}
        <Btns
          handler={signUpWithGoogleHandler}
          icon={<GoogleIcon />}
          btnTitle={"Sign Up With Google"}
        />

        <Btns handler={signUpHandler} btnTitle={"Sign Up"} />
        <Link to={"/login"}>
          <Typography
            sx={{
              margin: "10px 0",
            }}
            className="text-center"
          >
            Go to Login Page
          </Typography>
        </Link>
      </Paper>
    </Box>
  );
};

export default SignUp;
