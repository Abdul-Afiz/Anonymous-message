import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { reSignIn, signOut } from "../reducers/anonReducer";

import Button from "../components/atoms/button";
import { getMessage } from "../reducers/messageReducer";

const Messages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.message);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(reSignIn());
    dispatch(getMessage());
  }, [dispatch]);

  const logout = () => {
    dispatch(signOut());
    navigate("/");
  };

  return (
    <div className="overflow-hidden flex flex-1 ">
      <div className="flex flex-col p-4">
        <h2 className="text-4xl font-bold mt-2 text-center text-white">
          My Messages
        </h2>
        {data.length === 0 ? (
          <div className="bg-black m-4 p-4 rounded-md">
            <h1 className="text-4xl text-white font-bold text-center ">
              Ehyaaaa, you haven't gotten message, kindly share your link to
              friends....
            </h1>
          </div>
        ) : (
          <div className="bg-[white] m-4  py-1  px-4 scrollbar-thin scrollbar-thumb-indigo-400 rounded-md">
            {data.map((msg) => (
              <div
                key={msg._id.toString()}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 m-5 rounded-xl grid place-items-center"
              >
                <span className="font-bold text-lg text-white ">Message</span>
                <p className="my-2 text-center italic"> {msg.message} </p>
                <span className="font-semibold text-[0.8rem] text-white">
                  Sent on {msg.createdAt}
                </span>
              </div>
            ))}
          </div>
        )}
        <Button
          title="go back"
          cl="my-2 w-[50%]"
          onClick={() => navigate(-1)}
        />

        {data && <Button title="Log Out" onClick={logout} />}
      </div>
    </div>
  );
};

export default Messages;
