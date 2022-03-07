import classnames from "classnames";
import React from "react";

const Button = ({ onClick, title, type, cl }) => {
  return (
    <button
      type={type}
      className={classnames(
        "bg-[#280484] text-center text-white text-[0.9rem] text-sm font-medium p-[0.8rem] rounded-sm cursor-pointer",
        cl
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
