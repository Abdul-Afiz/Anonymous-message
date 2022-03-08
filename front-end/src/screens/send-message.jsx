import React from "react";
import Input from "../components/atoms/input";
import Button from "../components/atoms/button";

const SendMessage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    e.target.message.value = "";

    console.log(message);
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        className="flex flex-col w-full mt-3 p-6 mx-auto max-w-[40%] bg-white items-center rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold text-center">
          Send A Secret Message
        </h1>
        <p className="text-[#5b5675] font-normal text-[0.9rem] my-[1rem] text-center max-w-[80%]">
          "Send that secret message to that person you have always wanted to."
        </p>

        <div
          className={`border-[1.8px] rounded-sm border-[#997fda] w-full py-[0.5rem] px-[0.7rem]`}
        >
          <textarea
            className="w-full text-sm outline-none placeholder:text-[#61577995] my-[0.7rem]"
            //   value={value}
            //   onChange={onChange}
            placeholder="placeholder"
            name="message"
          ></textarea>
        </div>

        <Button title="Send Message" cl="mt-[1.5rem]" type="submit" />

        <p className="mt-[0.7rem] text-sm">
          Don't have an account?{" "}
          <span className="text-[#280484] font-medium text-base cursor-pointer">
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default SendMessage;
