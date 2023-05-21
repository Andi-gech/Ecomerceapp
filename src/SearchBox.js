import { useEffect } from "react";
import Searchcards from "./Searchcards";

import UseFindProducthook from "./UseSearch";

function Searchbox({search,width,ismobile}) {
 
    const { data,refech } = UseFindProducthook(search)
  
     useEffect(() => {
   const refexh=()=>{refech()}
  }, [search]);

    return (   <div className="Searchbox" style={{width:width}}>
        <div className="SearchTitle">Search Result For "{search}"</div>
        <div className="SearchCard-List">
            {data?.map((item)=><Searchcards ismobile={ismobile}  name={item.name} image={item.images} price={item.price} id={item.id}/>)}
           
           
        </div>
    </div>);
}

export default Searchbox;