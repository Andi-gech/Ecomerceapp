function Colorcomponent({ top, bottom, activestatus, onclick }) {
  return (
    <div
      className={` w-[50px] h-[50px] mx-2  ${
        activestatus ? "border-2" : "border-0"
      } border-blue-400 rounded-full flex flex-col overflow-hidden`}
      onClick={onclick}
    >
      <div className=" w-full h-1/2 " style={{ backgroundColor: top }}></div>
      <div className=" w-full h-1/2 " style={{ backgroundColor: bottom }}></div>
    </div>
  );
}

export default Colorcomponent;
