import { useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile ,GoogleAuthProvider} from "firebase/auth";

import { auth } from "../Firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signUpHandler = async () => {
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      username.trim() === ""
    ) {
      alert("Please Fill All field");
      return;
    }
    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      updateProfile(response.user,{
        displayName: username,
      })

      console.log(response);
      

      alert("signUp user");
    } catch (error) {
      console.log(error);
    }
  };
  const signUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      let response = await signInWithPopup(auth, provider);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 text-white sm:p-12">
          <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Expense<span className="text-cyan-400">Tracker</span>
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Track · Save · Build Your Future
            </p>
          </div>

          <div className="relative my-12">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Take Control of
              <span className="mt-2 block text-cyan-400">Your Finances</span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Track your income and expenses, manage your budget, and build a
              better financial future — all in one place.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Monthly overview</p>
                  <p className="mt-1 text-2xl font-bold">
                    Your finances, simplified
                  </p>
                </div>
                <span className="rounded-xl bg-cyan-400/10 p-3 text-2xl text-cyan-400">
                  ↗
                </span>
              </div>

              <div className="flex h-24 items-end gap-3">
                <div className="h-10 flex-1 rounded-t-lg bg-cyan-400/40" />
                <div className="h-16 flex-1 rounded-t-lg bg-cyan-400/60" />
                <div className="h-12 flex-1 rounded-t-lg bg-indigo-400/60" />
                <div className="h-20 flex-1 rounded-t-lg bg-cyan-400" />
                <div className="h-14 flex-1 rounded-t-lg bg-indigo-400/70" />
                <div className="h-24 flex-1 rounded-t-lg bg-cyan-300" />
              </div>
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="font-semibold">Your money. Your goals.</p>
            <p className="text-sm text-slate-400">
              Make every financial decision count.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center p-6 sm:p-12 lg:p-14">
          {/* <div className="mb-10 text-right text-sm text-slate-500">
            Don't have an account?{" "}
            <a
              className="ml-1 font-semibold text-indigo-600 hover:text-indigo-700"
            >
            Login
            </a>
          </div> */}

          <div className="mx-auto w-full max-w-md">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Welcome Back 👋
            </h2>

            <p className="mt-3 leading-6 text-slate-500">
              Sign Up in to your account to continue your financial journey.
            </p>

            <div className="mt-9 space-y-6">
              <Input
                label="User name"
                type="text"
                name="text"
                placeholder="Enter your User name"
                value={username}
                onChange={setUsername}
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={setEmail}
                required
              />

              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={setPassword}
                required
              />

              <div className="flex items-center justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
                  />
                  Remember me
                </label>

                <a
                  href="/forgot-password"
                  className="font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Forgot password?
                </a>
              </div>

              <Button onClick={signUpHandler} text="Sign Up" type="button" />
            </div>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-sm text-slate-400">or</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button
              onClick={signUpWithGoogle}
              type="button"
              className="cursor-pointer flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <span className="text-lg font-bold text-blue-600">G</span>
              Continue with Google
            </button>

            <p className="mt-8 text-center text-sm text-slate-500">
              Do you have an account?{" "}
              <Link to={"/login"}>
                <span
                  // href="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Login Your Account
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
