import React, { useState } from 'react'
import Input from '../component/Input'
import Btn from '../component/Btn';

const Login = () => {
  const [Form, setForm] = useState({
    email: "",
    password: ""
  })
  const formHandler = (value, field) => {
    // console.log("ma chala", value);
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const loginHandler = () => {
    console.log(Form);


  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-gray-900 p-8 shadow-2xl">

        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Login Form
        </h1>

        <div className="space-y-5">

          <Input head={"Email"} placeholder={"Enter Your Password"} handler={formHandler} type={"email"} />

          <Input head={"Password"} placeholder={"Enter your Password"} handler={formHandler} type={"password"} />

          <Btn btn={"Login"} Handler={loginHandler} />

        </div>

      </div>

    </div>
  );
}

export default Login