import React from "react";
import product from "./assets/brandbanner.jpg";
export default function BrandCard() {
  return (
    <div
      style={{ backgroundImage: `url(${product})`, backgroundSize: "cover" }}
      className=" w-full h-full bg-red-600  rounded-xl overflow-hidden"
    ></div>
  );
}
