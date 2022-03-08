import React from "react";
import Button from "../components/atoms/button";

const Messages = () => {
  const data = [
    {
      message: "u are good",
      _id: "6225ceeb67ba565cfe816b77",
      createdAt: "2022-03-07T09:22:51.585Z",
      __v: 0,
    },
    {
      message:
        "Sometimes you lie in bed at night and you don't have a single thing to worry about. That always worries me!",
      _id: "6225cf48f4eac78a4f8af159",
      createdAt: "2022-03-07T09:24:24.482Z",
      __v: 0,
    },
    {
      message:
        "You know how the saying goes: Laughter is the best medicine. And there’s so much truth to that old adage. If you’re having a bad day, or if someone you love needs a little cheering up, humor can help ease the tension and create a little pocket of joy amid life’s stresses.",
      _id: "6225d143f28a04cdbab43fa6",
      createdAt: "2022-03-07T09:32:52.706Z",
      __v: 0,
    },
    {
      message: "u are a good boy",
      _id: "62271816f9b245f22ca4e4f4",
      createdAt: "2022-03-08T08:47:18.277Z",
      __v: 0,
    },
    {
      message: "hello world",
      _id: "6227182bf9b245f22ca4e4fb",
      createdAt: "2022-03-08T08:47:40.076Z",
      __v: 0,
    },
  ];
  return (
    <div className="overflow-hidden flex flex-1">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col p-4">
        <h2 className="text-4xl font-bold mt-2 text-center text-white">
          My Messages
        </h2>
        <div className="bg-[white] m-4 mx-auto max-w-[50%] py-1  px-4 scrollbar-thin scrollbar-thumb-indigo-400 rounded-md">
          {data.map((msg) => (
            <div
              key={msg._id.toString()}
              className="bg-gradient-to-r from-[#421FAB] via-[#3F15BD] to-[#3710AD] p-4 m-5 rounded-xl grid place-items-center"
            >
              <span className="font-bold text-white">Message</span>
              <p className="my-2 text-center"> {msg.message} </p>
              <span className="font-semibold text-[0.9rem] text-white">
                Sent on {msg.createdAt}
              </span>
            </div>
          ))}
        </div>
        <Button title="go back" cl="mt-2 mt-4 mx-auto max-w-[25%]" />
      </div>
    </div>
  );
};

export default Messages;
