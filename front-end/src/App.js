import LogIn from "./screens/log-in";
import Messages from "./screens/messages";
import SendMessage from "./screens/send-message";
import SignUp from "./screens/sign-up";
import User from "./screens/user";

function App() {
  return (
    <div className="h-screen grid">
      <SendMessage />
      {/* <div className="bg-[#280484]"></div> */}
    </div>
  );
}
export default App;
