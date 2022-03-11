import React from "react";
import Input from "../components/atoms/input";
import Button from "../components/atoms/button";
import userServices from "../services/user-services";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    e.target.name.value = "";
    const email = e.target.email.value;
    e.target.email.value = "";
    const password = e.target.password.value;
    e.target.password.value = "";

    const user = { name, email, password };

    try {
      const signup = await userServices.userSignup(user);
      console.log(signup);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <div className="overflow-hidden">
      <form
        className="flex flex-col mt-3 bg-white p-6 items-center rounded-sm"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold ">Sign Up</h1>
        <p className="text-[#5b5675] font-normal text-[0.9rem] mt-[1rem] text-center max-w-[80%]">
          "Send that secret message to that person you have always wanted to."
        </p>
        <Input
          placeholder="Enter your name"
          label="Name"
          cl="mb-[0.7rem]"
          name="name"
        />
        <Input
          placeholder="Enter your email"
          label="Email"
          cl="mb-[0.7rem]"
          name="email"
        />
        <Input
          placeholder="Enter your password"
          label="Password"
          password="password"
          name="password"
        />
        <Button title="Sign Up" cl="mt-[1.5rem]" type="submit" />

        <p className="mt-[0.7rem] text-sm">
          Already have an account?{" "}
          <span
            className="text-[#280484] font-medium text-base cursor-pointer"
            onClick={() => navigate("/")}
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
