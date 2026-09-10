import React, { useState } from "react";
import Input from "../component/Input";
import Btn from "../component/Btn";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app, { db } from "../firebase/auth";
import { uploadImage } from "../cloudinary/cloudinary.js";
// import

// const auth = getAuth(app);
// console.log(auth);

const Register = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
    text: "",
    age: "",
    username: "",
    img: null,
  });
  console.log(Form);

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
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const navi = useNavigate();

  const registerHandler = async () => {
    const auth = getAuth();
    if (
      Form.email === "" ||
      Form.username === "" ||
      Form.age === "" ||
      Form.password === "" ||
      Form.text === ""||
      !Form.img === ""
    ) {
      sweetAlert("error", "Please Fill All field");
      return;
    }
    try {
      let { user } = await createUserWithEmailAndPassword(
        auth,
        Form.email,
        Form.password,
      );
      console.log("User Register SuccessFully", user);
      const imgUrl = await uploadImage(Form.img);
      if (user) {
        try {
          const docRef = await addDoc(collection(db, "users"), {
            email: Form.email,
            // password: Form.password,
            fullname: Form.text,
            username: Form.username,
            age: Form.age,
            userImg: imgUrl,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    } catch (error) {
      console.log(error);
    }

    sweetAlert("success", "Register successful");
    navi("/");
  };
  // console.log(Form);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-gray-900 p-8 shadow-2xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mb-8 text-center text-sm text-gray-400">
          Sign up to get started
        </p>

        <div className="space-y-4">
          {/* <h1 className="mb-2 text-center text-3xl font-bold text-white">
                        TEST REGISTER
                    </h1> */}
          <Input
            placeholder="Enter your Name"
            head="Name"
            type="text"
            handler={formHandler}
          />
          <Input
            placeholder="Enter your Username"
            head="UserName"
            type="username"
            handler={formHandler}
          />
          <Input
            placeholder="Enter your email"
            head="Email"
            type="email"
            handler={formHandler}
          />
          <Input
            placeholder="Enter your Img"
            head="File"
            type="file"
            handler={formHandler}
          />
          <Input
            placeholder="Password"
            head="Password"
            type="password"
            handler={formHandler}
          />
          <Input
            placeholder="Enter your Age"
            head="Age"
            type="age"
            handler={formHandler}
          />

          {/* <Link to={"/"}> */}
          <Btn btn="Sign Up" Handler={registerHandler} />
          <Link to={"/login"}>
            {" "}
            <button className="bg-amber-100 text-black cursor-pointer font-bold text-center border-2 p-2 rounded-xl">
              Go to Login
            </button>
          </Link>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
