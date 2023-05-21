import { useContext, useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

import Baseurl from "./BaseUrl";
import ButtonsTransparent from "./Buttons";

function Productcard({name,Description,price,rate,id,image,discount}) {
    const [Liked,SetLiked]=useState(false)
    

 
 
    
   
    const HandleAddtocart=(event)=>{
        const existingData = JSON.parse(localStorage.getItem('myCart')) || [];
        let productExists = false;
        for (let i = 0; i < existingData.length; i++) {
            
            if (existingData[i].id === id) {
                
                existingData[i].quantity = existingData[i].quantity + 1;
                existingData[i].price=price*existingData[i].quantity;
                productExists = true;
                break
            }
        }
        
        if (!productExists) {
            existingData.push({'id':id,'itemname':name,"quantity":1,"price":price})
       
        }
        window.localStorage.setItem("myCart", JSON.stringify(existingData));
        window.dispatchEvent(new Event("storage"));
        event.preventDefault();
        
       
    
    }
    const baseUrl = useContext(Baseurl);

   
    
    const HandleLikeButtonclicked=(event)=>{
        const existingData = JSON.parse(localStorage.getItem('myData')) || [];
        console.log(existingData)
        existingData.push({'name':"andix32","age":"age3"})
       
        console.log(existingData)
        window.localStorage.setItem("myData", JSON.stringify(existingData));
        event.preventDefault();

        
       
SetLiked(!Liked)

    }
    return ( <Link to={`${id}`} className="ProductLink"><div className="ProductCard">
        <div className="ProductImage" style={{ backgroundImage: `url(${image?.startsWith("http")
              ? image
              : `${baseUrl}${image}`})`}}>
          {Liked &&<FaHeart color="red" size={20} onClick={HandleLikeButtonclicked}/> }
          {!Liked && <FaRegHeart color="black" size={20} onClick={HandleLikeButtonclicked}/>}
        </div>
       
        <div className="Productname">
            <div className="ProductTitle">
            <p id="ProductNames">{name} </p>
            <p id={discount!==0?"DiscountPrice":"Price"}>{price}$</p>
           {discount!==0&&<p id="Price">{price-price/(discount*10)}$</p>} 
            </div>
           
            <p id="Description">{Description} </p>
            <div className="rating"  >
            <Rating initialRating={rate} style={{ zIndex: 9 }}   emptySymbol={<FaRegStar id="rates" size={12}/>}
  fullSymbol={<FaStar size={12} id="rates" color="darkgreen"/>} fractions={2}/>
  
               
               
                <p id="ratecount">({rate})</p>
            </div>

            <div className="AddtocartButton">
            <ButtonsTransparent onclick={HandleAddtocart} height={100} width={300} name="add to cart"/>
            </div>
        </div>
    </div> </Link>);
}

export default Productcard;