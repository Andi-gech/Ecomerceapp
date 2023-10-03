import { useEffect, useState } from "react";

function Quantity({ oncurrent }) {
  const [current, setcurrent] = useState(1);
  useEffect(() => {
    oncurrent(current);
  }, [current]);
  return (
    <div className="Quantity">
      <div
        className=" h-[40px] w-[40px]  font-extrabold flex items-center justify-center rounded-md border-2 border-zinc-100"
        onClick={() => {
          setcurrent(current !== 0 ? current - 1 : 0);
        }}
      >
        -
      </div>
      <div className="h-[40px] w-[40px]  flex items-center justify-center font-bold">
        {current}
      </div>
      <div
        className=" h-[40px] w-[40px]  font-extrabold flex items-center justify-center rounded-md border-2 border-zinc-c"
        onClick={() => setcurrent(current + 1)}
      >
        +
      </div>
    </div>
  );
}

export default Quantity;
