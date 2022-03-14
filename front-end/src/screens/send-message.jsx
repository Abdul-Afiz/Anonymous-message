import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";

import Button from "../components/atoms/button";

import { newMsg } from "../reducers/messageReducer";

const SendMessage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const message = e.target.message.value;
      dispatch(newMsg(user.id, message));
      e.target.message.value = "";
      navigate("/newuser");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <form
      className="flex flex-col w-full mt-3 p-6 mx-auto max-w-[40%] bg-white items-center rounded-md"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold text-center">
        Send A Secret Message to {user.name.toUpperCase()}
      </h1>
      <p className="text-[#5b5675] font-normal text-[0.9rem] my-[1rem] text-center italic">
        Drop an anonymous message for {user.name.toUpperCase()}.
      </p>

      <div
        className={`border-[1.8px] rounded-sm border-[#997fda] w-full px-[0.7rem]`}
      >
        <textarea
          className="w-full text-sm outline-none my-[0.5rem] text-black placeholder: italic text-[#61577995] "
          placeholder="Type your message here"
          name="message"
        ></textarea>
      </div>

      <Button title="Send Message" cl="mt-[1.5rem]" type="submit" />
    </form>
  );
};

export default SendMessage;
