import { useDispatch } from "react-redux";
import Button from "../components/atoms/button";
import Input from "../components/atoms/input";
import { signIn } from "../reducers/anonReducer";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    e.target.email.value = "";
    const password = e.target.password.value;
    e.target.password.value = "";
    const newUser = { email, password };
    dispatch(signIn(newUser));
  };

  return (
    <div className="flex flex-colp-16 overflow-hidden">
      <form
        className="flex flex-col bg-white p-6 items-center rounded-sm"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold mb-2">Log in</h1>
        <p className="text-[#5b5675] font-normal text-[0.9rem] my-2 text-center max-w-[70%] italic">
          "Send secret messages to your friends and receive anonymous accolades
          for fun at no charges."
        </p>
        <Input
          placeholder="Enter your email"
          label="Email"
          cl="mb-[0.7rem]"
          name="email"
        />
        <Input
          placeholder="Enter your password"
          label="Password"
          name="password"
          password="password"
        />
        <Button title="Log in" cl="mt-[1.5rem] " type="submit" />

        <p className="mt-[0.7rem] text-sm ">
          Not registered yet?{" "}
          <span
            className="text-[#280484] font-medium text-base cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Create an Account
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
