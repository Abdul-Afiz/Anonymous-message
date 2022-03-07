import React from "react";
import Input from "../components/atoms/input";
import Button from "../components/atoms/button";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    e.target.name.value = "";
    const email = e.target.email.value;
    e.target.email.value = "";
    const password = e.target.password.value;
    e.target.password.value = "";

    console.log(name, email, password);
  };

  return (
    <div className="flex flex-col items-center p-16 overflow-hidden">
      <h1 className="text-4xl font-bold mb-1">Sign Up</h1>
      <p className="text-[#5b5675] font-normal text-[0.9rem] mt-[1rem] text-center max-w-[80%]">
        "Send that secret message to that person you have always wanted to."
      </p>
      <form className="flex flex-col w-full mt-3" onSubmit={handleSubmit}>
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
          <span className="text-[#280484] font-medium text-base cursor-pointer">
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
