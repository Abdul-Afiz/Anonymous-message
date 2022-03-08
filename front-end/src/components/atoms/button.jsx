import classnames from "classnames";
import React from "react";

const Button = ({ onClick, title, type, cl }) => {
  return (
    <button
      type={type}
      className={classnames(
        "bg-gradient-to-r from-[#421FAB] via-[#3F15BD] to-[#3710AD] text-center text-white text-[0.9rem] text-sm font-medium p-[0.8rem] rounded-sm cursor-pointer w-[100%]",
        cl
      )}
      onClick={onClick}
    >
      <span className="font-semibold text-base">{title}</span>
    </button>
  );
};

export default Button;
