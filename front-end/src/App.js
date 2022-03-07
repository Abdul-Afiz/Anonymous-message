import LogIn from "./screens/log-in";
import SignUp from "./screens/sign-up";

function App() {
  return (
    <div className="h-screen grid grid-cols-2 ">
      <SignUp />
      <div className="bg-[#280484]"></div>
    </div>
  );
}
export default App;
