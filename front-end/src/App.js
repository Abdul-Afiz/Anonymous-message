import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Route, Routes, Navigate } from "react-router-dom";

import LogIn from "./screens/log-in";
import Messages from "./screens/messages";
import SendMessage from "./screens/send-message";
import SignUp from "./screens/sign-up";
import User from "./screens/user";
import { reSignIn } from "./reducers/anonReducer";
import { getMessage } from "./reducers/messageReducer";

function App() {
  const user = useSelector((state) => state.auth);
  const msg = useSelector((state) => state.message.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reSignIn());
    dispatch(getMessage());
  }, [dispatch]);

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden flex flex-col py-4 justify-center items-center">
      <Routes>
        <Route
          path="/user"
          element={user ? <User /> : <Navigate replace to="/" />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/messages"
          element={
            !msg ? (
              <h1 className="font-semibold text-5xl text-white">loading</h1>
            ) : (
              <Messages />
            )
          }
        />

        <Route
          path="/"
          element={!user ? <LogIn /> : <Navigate replace to="/user" />}
        />
        <Route
          path="/message/:id"
          element={
            !user ? (
              <h1 className="font-semibold text-3xl text-white">loading</h1>
            ) : (
              <SendMessage />
            )
          }
        />
      </Routes>
    </div>
  );
}
export default App;
