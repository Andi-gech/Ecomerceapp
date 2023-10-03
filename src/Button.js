import React from "react";

function Button({ name, backgroundColor, onpress }) {
  return (
    <div
      onClick={onpress}
      className={` h-full active:opacity-70 w-full ${backgroundColor} flex items-center rounded-md justify-center`}
    >
      <p className="text-white font-semibold  text-lg">{name}</p>
    </div>
  );
}

export default Button;
