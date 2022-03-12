import React, { useEffect, useState } from "react";
import Button from "../components/atoms/button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reSignIn, signOut } from "../reducers/anonReducer";
import { getMessage } from "../reducers/messageReducer";
import { CopyToClipboard } from "react-copy-to-clipboard";

const User = () => {
  const [copy, setCopy] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  const msg = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(reSignIn());
    dispatch(getMessage());
  }, [dispatch]);

  const logout = () => {
    dispatch(signOut());
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full bg-white p-6 items-center rounded-sm">
        <h1 className="text-4xl font-bold text-center">
          {msg.name ? `${msg.name.toUpperCase()}'s Profile` : "Welcome"}
        </h1>
        <p className="text-[#5b5675] font-normal text-[0.9rem] mt-[1rem] text-center max-w-[80%]">
          {msg.name
            ? `Welcome ${msg.name} Check Your Messages.`
            : "Welcome to Anonymous Message, share your link to start getting your messages"}
        </p>

        <Button
          title="View Your Secret Messages"
          cl="mt-[1.5rem]"
          type="submit"
          onClick={() => navigate("/messages")}
        />

        <CopyToClipboard text={`http://localhost:3000/message/${user.id}`}>
          <Button
            title={
              !copy
                ? "Share my link"
                : "Link copied successfully to your clipboard"
            }
            cl="my-[1.5rem]"
            type="submit"
            onClick={() => setCopy(!copy)}
          />
        </CopyToClipboard>

        {user && <Button title="Log Out" onClick={logout} />}
      </div>
    </div>
  );
};

export default User;
