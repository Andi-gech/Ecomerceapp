import { useEffect } from "react";
import Searchcards from "./Searchcards";

import UseFindProducthook from "./UseSearch";

function Searchbox({ search, width, ismobile }) {
  const { data, refech } = UseFindProducthook(search);

  useEffect(() => {
    const refexh = () => {
      refech();
    };
  }, [search]);

  return (
    <div
      className=" bg-white absolute top-[50px] overflow-y-auto rounded-sm min-h-[200px] right-0   shadow-sm shadow-gray-600"
      style={{ width: width }}
    >
      <div className="SearchTitle">Search Result For "{search}"</div>
      <div className="SearchCard-List">
        {data?.length == 0 && <div>No Product Found</div>}
        {data?.map((item) => (
          <Searchcards
            ismobile={ismobile}
            name={item.name}
            image={item.images}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Searchbox;
