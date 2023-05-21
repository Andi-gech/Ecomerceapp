import Skeleton from "react-loading-skeleton";
import Productcard from "./ProductCard";

import useWeeklyhook from "./UseWeeklyProduct";
function InlineList({name,isLoading}) {
    const { data} = useWeeklyhook()
    const sample=[1,2,3,4,5,67,8,9,77,53,32]
    
    return (<div>
        
        {data&&<div className="Weekly-List-Name"><p id="WeeklyPopular">{name}</p></div>}
        {isLoading&&<div style={
{marginTop:20}
} ><Skeleton height={35} width={300}  /></div>}
        <div className="flatlist">
        <div className="Weekly-product-list">
        {data?.map((product,index)=>
                  <Productcard key={index} discount={product.discount} image={product.images} name={product.name} Description={product.description} rate={product.rating} price={product.price} id={product.id}/>
            )}
             {sample.map((pp ,index)=>
            <div key={index}>
            {isLoading&&<div style={
              {marginLeft:20,marginTop:10}
              } ><Skeleton  height={300}
              width={270}  /></div>}</div>)}
            
        </div></div></div>  );
}

export default InlineList;