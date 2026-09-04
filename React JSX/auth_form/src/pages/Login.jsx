import React, { useState } from "react";
import Input from "../component/Input";
import Btn from "../component/Btn";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import app from "../firebase/auth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
const Login = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const sweetAlert = (icon, text) => {
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    }).fire({
      icon: `${icon}`,
      title: `${text}`,
    });
  };
  const formHandler = (value, field) => {
    // console.log("ma chala", value);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate();

  const loginHandler = () => {
    if (Form.email === "" || Form.password === "") {
      sweetAlert("error", "Fill all field");
      return;
    }

    const auth = getAuth();

    signInWithEmailAndPassword(auth, Form.email, Form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sweetAlert("success", "Login SuccessFully");
        navigate("/");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/invalid-credential") {
          sweetAlert("error", "Email or password is incorrect");
        } else if (error.code === "auth/invalid-email") {
          sweetAlert("error", "Invalid email");
        } else {
          sweetAlert("error", "Login failed");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-gray-900 p-8 shadow-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Login Form
        </h1>

        <div className="space-y-5">
          <Input
            head={"Email"}
            placeholder={"Enter Your Email"}
            handler={formHandler}
            type={"email"}
          />

          <Input
            head={"Password"}
            placeholder={"Enter your Password"}
            handler={formHandler}
            type={"password"}
          />

          <Btn btn={"Login"} Handler={loginHandler} />
          <Link to={"/register"}>
            {" "}
            <button className="text-white font-bold text-center border-2 p-2 rounded-xl">
              Go to Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
