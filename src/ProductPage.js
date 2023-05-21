import { useState } from "react";
import { FaMoneyBill, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import productpic from "./assets/s.jpg"

import Colorcomponent from "./ColorComponent";
import InlineList from "./InlineList";
import Quantity from "./Quantity";
import SizeComponent from "./SizeComponent";

import Table from "./Table";

import UseallProductshook from "./UseProducts";


function Productpage() {
    const [active,setactive]=useState('red')
    
    const [activeSize,setSizeactive]=useState('S')
    const [current,setcurrent]=useState(2)
    
    
    const { productId } = useParams();
    
    let navigate = useNavigate();
    const { data } = UseallProductshook(productId)
   
   

    const HandleAddtocart=(event)=>{
      
        const existingData = JSON.parse(localStorage.getItem('myCart')) || [];
        let productExists = false;
        for (let i = 0; i < existingData.length; i++) {
            
            if (existingData[i].itemname === data?.name) {
                console.log(existingData)
                
                existingData[i].quantity = existingData[i].quantity + current;
                existingData[i].price=data?.price*existingData[i].quantity;
                productExists = true;
                break
            }
        }
        
        if (!productExists) {
            existingData.push({'itemname':data?.name,"quantity":1,"price":data?.price})
       
        }
        window.localStorage.setItem("myCart", JSON.stringify(existingData));
        window.dispatchEvent(new Event("storage"));
        event.preventDefault();
        
       
    
    }
   
  
    const handlebuyclick=()=>{
        navigate('/order',{
          replace: true,
          })

    }
    
    const currentfunction=(current)=>{setcurrent(current)}
    
    return ( 
     <div className="ProductPage" ><div className="Path"><p onClick={()=> navigate(-1)}>Catagory</p><Link><p>/Product</p></Link></div>
    <div className="Product-PageBody" >
    <div className="Largeimage">
        <div className="ProductImg">
            <img alt="Productpic" src={data?.images}/>
        </div>
        <div className="ProductImagelist">
            <div className="imagebutton">  <img alt="Productpic" src={productpic}/></div>
            <div className="imagebutton">  <img alt="Productpic" src={productpic}/></div>
            <div  className="imagebutton">  <img alt="Productpic" src={data?.images}/></div>
            <div className="imagebutton">  <img alt="Productpic" src={productpic}/></div>
      
        </div>
    </div>

    <div className="ProductDetails">
       

        <div className="ProductNames"><p>{data?.name}</p></div>
       <div className="ProductDescription"> {data?.description}</div>
       <div className="rating"  >
            <Rating initialRating={data?.rating} style={{ zIndex: 9 }}   emptySymbol={<FaRegStar id="rates" size={12}/>}
  fullSymbol={<FaStar size={12} id="rates" color="darkgreen"/>} fractions={2}/>
  
            </div>
            <div className="ProductPrice"  >
      <FaMoneyBill style={{marginRight:5}}/> {data?.price}Birr
            </div>
           
            <div className="ChooseColor">
                <p>Choose Color</p>
                <Colorcomponent top={"red"} bottom={"pink"} onclick={()=>{setactive("red")}} activestatus={active==="red"?true:false}/>
                <Colorcomponent top={"black"} bottom={"gray"} onclick={()=>{setactive("black")}} activestatus={active==="black"?true:false}/>
                <Colorcomponent top={"orange"} bottom={"blue"} onclick={()=>{setactive("orange")}} activestatus={active==="orange"?true:false}/>
                <Colorcomponent top={"brown"} bottom={"pink"} onclick={()=>{setactive("brown")}} activestatus={active==="brown"?true:false}/>
            </div>
            <div className="Choosesize">
                <p>Choose Size</p>
                <SizeComponent size={"S"}  onclick={()=>{setSizeactive("S")}}  active={activeSize==="S"?true:false}/>
                <SizeComponent size={"M"}  onclick={()=>{setSizeactive("M")}}  active={activeSize==="M"?true:false}/>
                <SizeComponent size={"L"}  onclick={()=>{setSizeactive("L")}}  active={activeSize==="L"?true:false}/>
             
             </div>
             <div className="Setquantity">
                <p>Set Quantity</p>
          <Quantity oncurrent={currentfunction}/><p style={{
            color:"red"
            ,fontWeight:"bold",marginLeft:20
          }}>#3 Item Left</p>
             </div>
             <div className="InlineButtons">
             <div className="BuyAndAddtocart" onClick={handlebuyclick}>
<p>Buy Now</p>
             </div>
             <div className="Addtocart" onClick={HandleAddtocart}>
Addtocart
</div>
             </div>
       </div>
       
       </div>
      
    <div className="ProductTable"> Detail Specificatiion</div>
    <div className="SpecificationTable">
        <Table/>
        <Table/>
    </div>
    
    <div><InlineList name={"Similar Products"}/></div>

    </div> );
}

export default Productpage;