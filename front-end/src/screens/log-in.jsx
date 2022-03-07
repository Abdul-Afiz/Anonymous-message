import Button from "../components/atoms/button";
import Input from "../components/atoms/input";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    e.target.email.value = "";
    const password = e.target.password.value;
    e.target.password.value = "";

    console.log(email, password);
  };

  return (
    <div className="flex flex-col items-center p-16 ">
      <h1 className="text-4xl font-bold mb-2">Log in</h1>
      <p className="text-[#5b5675] font-normal text-[0.9rem] my-2 text-center max-w-[80%]">
        "Send that secret message to that person you have always wanted to."
      </p>
      <form className="flex flex-col w-full mt-3" onSubmit={handleSubmit}>
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
        <Button title="Log in" cl="mt-[1.5rem]" type="submit" />

        <p className="mt-[0.7rem] text-sm ">
          Not registered yet?{" "}
          <span className="text-[#280484] font-medium text-base cursor-pointer">
            Create an Account
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
