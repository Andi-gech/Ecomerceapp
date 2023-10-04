import React from "react";
import product from "./assets/brandbanner.jpg";
export default function BrandCard() {
  return (
    <div
      style={{ backgroundImage: `url(${product})`, backgroundSize: "cover" }}
      className=" w-full h-full bg-gray-300  rounded-xl overflow-hidden"
    ></div>
  );
}
