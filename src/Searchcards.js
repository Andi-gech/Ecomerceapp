import { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import productpic from "./assets/s.jpg"
import Baseurl from "./BaseUrl";
function Searchcards({name,image,price,id,ismobile}) {
    const baseUrl = useContext(Baseurl);
    

    return (
        <Link to={`${id}`}>  <div className="Searchcards">
        <img src={image?.startsWith("http")
              ? image
              : `${baseUrl}${image}`} />
     
            <p id="SearchProductNames">{name}</p>
           {!ismobile&&<Rating initialRating={2} style={{ zIndex: 9 }}   emptySymbol={<FaRegStar id="rates" size={12}/>}
  fullSymbol={<FaStar size={12} id="rates" color="darkgreen"/>} fractions={2}/>} 
        <p id="SearchProductprice">{price}Birr</p>
    </div></Link>);
}

export default Searchcards;