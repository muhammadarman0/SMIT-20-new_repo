import React, { useState } from "react";
// import { Chrome } from "lucide-react";
import Input from "../component/Input";
import Button from "../component/Button";
import { Link } from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const loginFormValue = (type, value) => {
    setForm((prev) => ({ ...prev, [type]: value }));
  };

  const handleLogin = (e) => {
    console.log(form);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f6f7] p-10 max-[600px]:p-0">
      <div className="grid min-h-[900px] w-full max-w-[1425px] grid-cols-2 overflow-hidden rounded-[10px] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.08)] max-[1000px]:max-w-[650px] max-[1000px]:grid-cols-1 max-[600px]:min-h-screen max-[600px]:rounded-none">
        {/* ================= LEFT SIDE ================= */}

        <div className="relative min-h-[900px] overflow-hidden text-white max-[1000px]:min-h-[500px] max-[600px]:min-h-[400px]">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
            alt="Luxury Fashion"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/55" />

          {/* Top Content */}
          <div className="absolute left-[50px] right-[35px] top-[38px] flex items-start justify-between max-[600px]:left-[25px] max-[600px]:top-[25px]">
            <div className="relative">
              <h2 className="text-[30px] font-medium tracking-[8px] max-[600px]:text-[22px] max-[600px]:tracking-[5px]">
                LUXEWEAR
              </h2>

              <div className="absolute -bottom-[22px] left-0 h-[2px] w-[32px] bg-white" />
            </div>

            <div className="flex flex-col text-right text-[16px] leading-[1.5] max-[600px]:text-[12px]">
              <span>Premium Fashion</span>
              <span>For a Better You</span>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-[65px] left-[50px] max-[600px]:bottom-[35px] max-[600px]:left-[25px]">
            <h1 className="mb-[25px] font-serif text-[56px] font-normal leading-[1.08] max-[600px]:text-[40px]">
              Style is a
              <br />
              way of life.
            </h1>

            <p className="text-[16px] leading-[1.7]">
              Discover the latest trends and
              <br />
              upgrade your wardrobe with LUXEWEAR.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center justify-center bg-white max-[1000px]:min-h-[700px]">
          <div className="w-full max-w-[540px] p-[50px] max-[600px]:p-[35px_25px]">
            {/* Logo */}
            <div className="mb-[55px] text-[34px] font-medium tracking-[8px] max-[600px]:mb-10 max-[600px]:text-[28px]">
              LUXEWEAR
            </div>

            {/* Heading */}
            <div>
              <h1 className="mb-[10px] text-[32px] font-semibold max-[600px]:text-[27px]">
                Welcome Back
              </h1>

              <p className="mb-[42px] text-[16px] leading-[1.6] text-[#637083]">
                Sign in to your account and continue your style journey.
              </p>
            </div>

            {/* Form */}
            <Input
              label="Email Address"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={form.email}
              handler={loginFormValue}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={form.password}
              handler={loginFormValue}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            {/* Forgot Password */}
            <div className="-mt-2 mb-[34px] flex justify-end">
              <a href="#" className="text-[14px] text-[#526075] underline">
                Forgot Password?
              </a>
            </div>

            {/* Login */}
            <Button handler={handleLogin} title={"Login"} />

            {/* OR */}
            <div className="my-[38px] flex items-center gap-5">
              <span className="h-px flex-1 bg-[#d6d9dd]" />

              <p className="text-[14px] text-[#4e5968]">OR</p>

              <span className="h-px flex-1 bg-[#d6d9dd]" />
            </div>

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="flex h-[62px] w-full cursor-pointer items-center justify-center gap-4 rounded-md border border-[#68717d] bg-white text-[16px] transition hover:bg-[#f7f7f7]"
            >
              {/* <Chrome size={21} className="text-[#4285f4]" /> */}

              <span>Continue with Google</span>
            </button>

            {/* Create Account */}
            <div className="mt-[38px] flex justify-center gap-2.5 text-[14px] text-[#687487]">
              <span>Don't have an account?</span>

              <a href="#" className="font-semibold text-[#26354b] underline">
                <Link to={"/register"}>Create Account</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
