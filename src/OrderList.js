
import {  useState } from "react";
import Banner from "./Banner";

import Table from "./Table";
import UseOrders from "./UseFilterdProduct";

function Orderlistpage() {
  const [,Setorderid]=useState("")
  
  
  
  

  
  function handleChange(event) {
    Setorderid(event.target.value)
   
  

  }
  
 
const { data} =UseOrders()

    return ( <div
        className="OrderListPage"
      
      >
       <Banner/>
       <div className="inlineSearch">
       <div className="SearchOrder">
        <p>Find By Order ID</p>
                <input placeholder="Order Id" onChange={handleChange} />
                <button >Go</button>
            
                
            </div>
       </div>

       <div className="Ordertables"> 
       {data?.map((item,index)=><Table key={index} colomns={["Order No","Date","Status"]} Row={[item.orderuniqueId,item.date_created,item.status]} />)}
       </div>
     
</div>);
}

export default Orderlistpage;