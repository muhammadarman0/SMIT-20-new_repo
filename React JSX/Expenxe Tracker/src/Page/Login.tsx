import { useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      if (email.trim() === "" || password.trim() === "") {
        toast.error("Fill all field");
        return;
      }
      let response = await signInWithEmailAndPassword(auth, email, password);
      if (response.user) {
        toast.success("User Login SuccessFully");
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      let response = await signInWithPopup(auth, provider);
      toast.success("User Login SuccessFully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
        {/* Left Branding Section */}
        <section className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-7 text-white sm:p-12">
          <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-2xl shadow-lg">
                ◈
              </div>

              <div>
                <h1 className="text-xl font-bold sm:text-2xl">
                  Expense<span className="text-cyan-400">Tracker</span>
                </h1>
                <p className="mt-1 text-xs text-slate-400">
                  Track · Save · Grow
                </p>
              </div>
            </div>
          </div>

          <div className="relative my-12">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
              YOUR FINANCIAL JOURNEY STARTS HERE
            </span>

            <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Take Control
              <br />
              of Your
              <span className="block text-cyan-400">Finances.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
              Understand your spending, organize your budget, and make smarter
              financial decisions — all in one simple place.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    Smart money management
                  </p>
                  <p className="mt-2 text-xl font-bold">Every rupee matters.</p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-400">
                  ↗
                </div>
              </div>

              <div className="mt-6 flex h-20 items-end gap-3">
                <div className="h-8 flex-1 rounded-t-md bg-cyan-400/30" />
                <div className="h-12 flex-1 rounded-t-md bg-cyan-400/50" />
                <div className="h-10 flex-1 rounded-t-md bg-indigo-400/60" />
                <div className="h-16 flex-1 rounded-t-md bg-cyan-400/70" />
                <div className="h-12 flex-1 rounded-t-md bg-indigo-400/70" />
                <div className="h-20 flex-1 rounded-t-md bg-cyan-400" />
              </div>
            </div>
          </div>

          <p className="relative text-xs text-slate-400">
            © 2026 ExpenseTracker. Manage money with confidence.
          </p>
        </section>

        {/* Right Login Section */}
        <section className="flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-14">
          <div className="mb-10 text-right text-sm text-slate-500">
            New here?{" "}
            <a
              href="/signup"
              className="font-semibold text-indigo-600 transition hover:text-indigo-800"
            >
              Create account
            </a>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Welcome back
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Login to your account
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Enter your details below to access your personal expense
                dashboard.
              </p>
            </div>

            <div className="space-y-6">
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="you@example.com"
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
                  className="font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                onClick={loginHandler}
                text="Login to Dashboard →"
                type="button"
              />
            </div>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button
              onClick={signInWithGoogle}
              type="button"
              className="flex cursor-pointer w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-slate-50"
            >
              <span className="text-lg font-bold text-blue-600">G</span>
              Continue with Google
            </button>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Sign up for free
              </a>
            </p>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
