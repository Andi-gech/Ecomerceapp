import { useEffect, useState } from "react";

function Quantity({oncurrent}) {
    const [current,setcurrent]=useState(1)
    useEffect(() => {  
        oncurrent(current)
    },[current]) 
    return (  <div className="Quantity">
        <div className="controllbutton" onClick={()=>{setcurrent(current!==0?current-1:0)}}>-</div>
        <div className="displayquantity">{current}</div>
        <div className="controllbutton" onClick={()=>setcurrent(current+1)}>+</div>
    </div>);
}

export default Quantity;