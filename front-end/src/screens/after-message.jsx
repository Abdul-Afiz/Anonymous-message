import React from "react";
import Button from "../components/atoms/button";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { signOut } from "../reducers/anonReducer";

const AfterMessage = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (user) {
      dispatch(signOut());
    }
    navigate("/signup");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-white p-6 items-center rounded-sm">
        <h1 className="text-4xl font-bold text-center">
          Hurray!!! <br /> You've sent an anonymous message to{" "}
          {user.name.toUpperCase()}
        </h1>
        <p className="text-[#5b5675] font-normal text-[0.9rem] mt-[1rem] text-center max-w-[80%]">
          {" "}
          Don't stop the fun, signup now
        </p>

        <Button
          title="Click to join now"
          cl="mt-[1.5rem]"
          type="submit"
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
};

export default AfterMessage;

// <h1 className="text-4xl font-bold ">Sign Up</h1>
//       <p className="text-[#5b5675] font-normal text-[0.9rem] mt-[1rem] text-center max-w-[80%]">
//         "Register Now! Send secret messages to your friends and receive
//         anonymous accolades at Zero cost."
//       </p>
