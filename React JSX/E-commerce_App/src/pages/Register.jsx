import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Input from "../component/Input";
import Button from "../component/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../firebase/auth";
// import {toast ,ToastContainer} from 'toastify'
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate()
  const registerFormValue = (type, value) => {
    setForm((prev) => ({
      ...prev,
      [type]: value,
    }));
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

      console.log(response);
      if (response.user) {
        toast.success("user signup successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
    }
    form.confirmPassword = "";
    form.password = "";
    form.email = "";
    form.fullName = "";
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      let response = await signInWithPopup(auth, provider);

      console.log(response);
      if (response.user) {
        navigate("/");
      }
    } catch (error) {
        console.log(error);
        
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f5f6] p-10">
      <div className="mx-auto grid min-h-[900px] max-w-[1425px] grid-cols-2 overflow-hidden rounded-xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {/* ================= LEFT SIDE ================= */}

        <div className="relative overflow-hidden">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
            alt="Fashion"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

          {/* Logo */}
          <div className="absolute left-12 top-9">
            <h2 className="text-[30px] font-medium tracking-[8px] text-white">
              LUXEWEAR
            </h2>

            <div className="absolute -bottom-6 left-0 h-[2px] w-8 bg-white" />
          </div>

          {/* Content */}
          <div className="absolute bottom-16 left-12 text-white">
            <h1 className="mb-6 font-serif text-[56px] font-normal leading-[1.08]">
              Your style,
              <br />
              your story.
            </h1>

            <p className="text-[16px] leading-7">
              Create your account and discover
              <br />
              fashion made for you.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center justify-center bg-white">
          <div className="w-full max-w-[540px] px-12 py-14">
            {/* Logo */}

            <div className="mb-10">
              <h2 className="text-[34px] font-medium tracking-[8px] text-black">
                LUXEWEAR
              </h2>
            </div>

            {/* Heading */}

            <div className="mb-8">
              <h1 className="mb-2 text-[32px] font-semibold text-[#17191b]">
                Create Account
              </h1>

              <p className="text-[16px] leading-6 text-[#637083]">
                Join LUXEWEAR and start your style journey.
              </p>
            </div>

            {/* Form */}

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

            {/* <div className="mb-5">
                <label className="mb-2.5 block text-[16px] font-semibold text-[#17191b]">
                  Email Address
                </label>

                <div className="flex h-[56px] items-center rounded-md border border-[#d4d9df] px-5 transition focus-within:border-black focus-within:ring-1 focus-within:ring-black">
                  <Mail size={20} className="shrink-0 text-[#50565d]" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => registerFormValue("email", e.target.value)}
                    className="h-full w-full bg-transparent px-4 text-[16px] outline-none placeholder:text-[#a0a5ab]"
                  />
                </div>
              </div> */}
            <Input
              label="Email"
              type="email"
              name="email"
              id="email"
              handler={registerFormValue}
              placeholder="Enter your email"
              value={form.username}
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
              name="password"
              id="confirmPassword"
              showPassword={showPassword}
              handler={registerFormValue}
              setShowPassword={setShowPassword}
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

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#d6d9dd]" />

              <span className="text-sm text-[#687487]">OR</span>

              <div className="h-px flex-1 bg-[#d6d9dd]" />
            </div>

            {/* Google Sign Up */}

            <button
              onClick={signInWithGoogle}
              type="button"
              className="flex h-[60px] w-full cursor-pointer items-center justify-center gap-3 rounded-md border border-[#68717d] bg-white text-[16px] font-medium text-[#17191b] transition hover:bg-[#f7f7f7]"
            >
              <GoogleIcon fontSize="small" />

              <span>Sign up with Google</span>
            </button>

            {/* Login */}

            <div className="mt-8 flex justify-center gap-2 text-[14px]">
              <span className="text-[#687487]">Already have an account?</span>

              <Link to={"/login"}>
                {" "}
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
