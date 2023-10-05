function SizeComponent({ size, onclick, active }) {
  return (
    <div
      className={` w-[40px] dark:bg-zinc-800 dark:text-white h-[40px] mx-3    flex items-center justify-center  rounded-md bg-white  ${
        active ? "border-2" : "border-0"
      } border-blue-400`}
      onClick={onclick}
    >
      {size}
    </div>
  );
}

export default SizeComponent;
