import React from "react";
import classnames from "classnames";

const Input = ({ value, onChange, name, label, placeholder, password, cl }) => {
  return (
    <div className={classnames(`w-full`, cl)}>
      {label && (
        <p className="mb-2">
          {label}
          <span className="text-[#280484] font-medium text-base">*</span>
        </p>
      )}
      <div
        className={`border-[1.8px] rounded-sm border-[#997fda] w-full py-[0.5rem] px-4`}
      >
        <input
          className="w-full text-sm outline-none placeholder:text-[#61577995]"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          type={password ? password : "text"}
        />
      </div>
    </div>
  );
};

export default Input;
