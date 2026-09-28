import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Input from "../component/Input";
import Button from "../component/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth, { db } from "../firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const registerFormValue = (type, value) => {
    setForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const saveDataIntoDB = async (data) => {
    try {
      await setDoc(doc(db, "profile", data.uid), {
        currentUserID: data.uid,
        displayName: data.displayName,
        email: data.email,
        photoURL: data.photoURL || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      if (form.password !== form.confirmPassword) {
        alert("Please Enter a correct password");
        return;
      }

      let response = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,
      );

      await updateProfile(response.user, {
        displayName: form.fullName,
      });

      await saveDataIntoDB(response.user);

      if (response.user) {
        toast.success("User signup successfully!");
        navigate("/profile");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.code);

      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already exists!");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password is too weak!");
      } else {
        toast.error("Something went wrong!");
      }
    }

    setForm({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      let response = await signInWithPopup(auth, provider);

      await saveDataIntoDB(response.user);

      if (response.user) {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f5f6] px-3 py-4 sm:px-5 sm:py-6 md:px-8 md:py-8 lg:p-10">
      {/* Main Container */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1425px]
          overflow-hidden
          rounded-lg
          bg-white
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]

          lg:min-h-[850px]
          lg:grid-cols-2
          lg:rounded-xl
        "
      >
        {/* ================= LEFT SIDE ================= */}
        <div className="relative hidden overflow-hidden lg:block">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
            alt="Fashion"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

          {/* Logo */}
          <div className="absolute left-8 top-8 xl:left-12 xl:top-9">
            <h2 className="text-2xl font-medium tracking-[6px] text-white xl:text-[30px] xl:tracking-[8px]">
              LUXEWEAR
            </h2>

            <div className="absolute -bottom-5 left-0 h-[2px] w-7 bg-white xl:-bottom-6 xl:w-8" />
          </div>

          {/* Content */}
          <div className="absolute bottom-12 left-8 text-white xl:bottom-16 xl:left-12">
            <h1 className="mb-5 font-serif text-4xl font-normal leading-[1.08] xl:mb-6 xl:text-[56px]">
              Your style,
              <br />
              your story.
            </h1>

            <p className="text-sm leading-6 xl:text-[16px] xl:leading-7">
              Create your account and discover
              <br />
              fashion made for you.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex w-full items-center justify-center bg-white">
          <div
            className="
              w-full
              max-w-[540px]
              px-5
              py-8

              sm:px-8
              sm:py-10

              md:px-12
              md:py-12

              lg:px-10
              lg:py-14

              xl:px-12
            "
          >
            {/* Logo */}
            <div className="mb-7 sm:mb-8 md:mb-10">
              <h2 className="text-2xl font-medium tracking-[5px] text-black sm:text-[30px] sm:tracking-[7px] md:text-[34px] md:tracking-[8px]">
                LUXEWEAR
              </h2>
            </div>

            {/* Heading */}
            <div className="mb-6 sm:mb-7 md:mb-8">
              <h1 className="mb-2 text-2xl font-semibold text-[#17191b] sm:text-[28px] md:text-[32px]">
                Create Account
              </h1>

              <p className="text-sm leading-6 text-[#637083] sm:text-[15px] md:text-[16px]">
                Join LUXEWEAR and start your style journey.
              </p>
            </div>

            {/* ================= FORM ================= */}

            {/* Full Name */}
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              id="fullName"
              handler={registerFormValue}
              placeholder="Enter your Full Name"
              value={form.fullName}
            />

            {/* Email */}
            <Input
              label="Email"
              type="email"
              name="email"
              id="email"
              handler={registerFormValue}
              placeholder="Enter your email"
              value={form.email}
            />

            {/* Password */}
            <Input
              label="Password"
              type="password"
              name="password"
              id="password"
              handler={registerFormValue}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              placeholder="Create Password"
              value={form.password}
            />

            {/* Confirm Password */}
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              showPassword={showConfirmPassword}
              handler={registerFormValue}
              setShowPassword={setShowConfirmPassword}
              placeholder="Confirm Password"
              value={form.confirmPassword}
            />

            {/* Register Button */}
            <Button
              handler={handleRegister}
              title="Create Account"
              icon={ArrowRight}
            />

            {/* OR */}
            <div className="my-5 flex items-center gap-3 sm:my-6 md:my-7">
              <div className="h-px flex-1 bg-[#d6d9dd]" />

              <span className="text-xs text-[#687487] sm:text-sm">OR</span>

              <div className="h-px flex-1 bg-[#d6d9dd]" />
            </div>

            {/* Google Sign Up */}
            <button
              onClick={signInWithGoogle}
              type="button"
              className="
                flex
                h-14
                w-full
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-md
                border
                border-[#68717d]
                bg-white
                px-3
                text-sm
                font-medium
                text-[#17191b]
                transition
                hover:bg-[#f7f7f7]

                sm:h-[60px]
                sm:gap-3
                sm:text-[16px]
              "
            >
              <GoogleIcon fontSize="small" />

              <span>Sign up with Google</span>
            </button>

            {/* Login */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-1.5
                text-center
                text-xs

                sm:mt-7
                sm:gap-2
                sm:text-[14px]

                md:mt-8
              "
            >
              <span className="text-[#687487]">Already have an account?</span>

              <Link to="/login">
                <button
                  type="button"
                  className="cursor-pointer font-semibold text-[#26354b] underline"
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
