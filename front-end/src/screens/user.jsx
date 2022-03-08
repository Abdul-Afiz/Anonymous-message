import React from "react";
import Button from "../components/atoms/button";

const User = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col w-full mt-3 mx-auto max-w-[40%] bg-white p-6 items-center rounded-sm">
        <h1 className="text-4xl font-bold text-center">Aweda's Profile</h1>
        <p className="text-[#5b5675] font-normal text-[0.9rem] mt-[1rem] text-center max-w-[80%]">
          "Welcome Aweda Check Your Messages."
        </p>

        <Button
          title="View Your Secret Messages"
          cl="mt-[1.5rem]"
          type="submit"
        />

        <Button title="Share my link" cl="mt-[1.5rem]" type="submit" />

        {/* <p className="mt-[0.7rem] text-sm">
          Already have an account?{" "}
          <span className="text-[#280484] font-medium text-base cursor-pointer">
            Sign in
          </span>
        </p> */}
      </div>
    </div>
  );
};

export default User;
