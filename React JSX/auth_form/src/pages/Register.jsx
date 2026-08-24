import React, { useState } from "react";
import Input from "../component/Input";
import Btn from "../component/Btn";

const Register = () => {
    const [Form, setForm] = useState({
        email: "",
        password: "",
        text: "",
        age: "",
        username: ""

    })

    const formHandler = (value, field) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    };

    const registerHandler = () => {
        console.log(Form);


    }
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


                    <Btn
                        btn="Sign Up"
                        Handler={registerHandler}
                    />

                </div>

            </div>

        </div>
    );
};

export default Register;