import ButtonsTransparent from "./Buttons";
import Productcard from "./ProductCard";
import ServiceCard from "./ServieceCards";
import faq from "./assets/faq.svg";
import bannerimage from "./assets/bannerimage3.png";

import bannerimage2 from "./assets/bannerimage.png";
import onlinepay from "./assets/payment.svg"
import delivery from "./assets/delivery.svg"
import { products } from "./ProductList"
import { useMediaQuery } from "react-responsive";
import Skeleton from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'
import InlineList from "./InlineList";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import useproducthook from "./UseProduct";


function HomePage() {
    const {SearchParameter } = useParams();
    const [order, setOrder] = useState('asc');
    const [rate, setrate] = useState('inc');
    const [product, setproduct] = useState();
    const location = useLocation();
    const state = location.state;
    const sample=[1,2,3,4,5,67,8,9,77,53,32]
    const { data, isError, error, isLoading, refech } = useproducthook(state.id)
    

  
    

  const sortByPrice = () => {
    const sortedItems = data.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  

    setOrder(order === 'asc' ? 'desc' : 'asc');
    setproduct(sortedItems);
  };
  const sortByReview = () => {
    const sortedItem = data.sort((a, b) => {
      if (rate === 'inc') {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });
  

    setrate(rate === 'inc' ? 'dec' : 'inc');
    setproduct(sortedItem);
  };
  useEffect(() => {
    setproduct(data);
  }, [data]);

    
    return (  <div className="HomePage">
        {data&&<Banner/>}
  
{isLoading&&<Skeleton height={180}  />}
<div className="ShopBody">
{isLoading&&<div style={
{marginTop:20}
} ><Skeleton height={30} width={300}  /></div>}
    {data&&<div className="Catagory-selector" style={{width:"100%",overflowX:"scroll"}}>
        Sort by
       
        <div className="RoundButton">
        <p onClick={sortByPrice}>Price</p>
        </div>
        <div className="RoundButton">
        <p onClick={sortByReview}>Rate</p>
        </div>
        <div className="RoundButton">
        <p>name</p>
        </div>
        
        
       <div  className="RoundButton"><p>All</p></div>
        

    </div>}
    <div className="Nameofthelist">
    {isLoading&&<div style={
{marginTop:20}
} ><Skeleton height={35} width={300}  /></div>}
{data&&  <p>{SearchParameter} Products For You!</p>}
      
    </div>
    <div className="Product-cards">
        <div className="inline-cards">
            {product?.map((product,index)=>
            
                  <Productcard key={index}  discount={product.discount} name={product.name} Description={product.description} rate={product.rating} price={product.price} id={product.id} image={product.images}/>
            )}
            {sample.map((pp,index)=>
            <div key={index}>
            {isLoading&&<div style={
              {marginLeft:20,marginTop:10}
              } ><Skeleton  height={300}
              width={270}  /></div>}</div>)}
            
      
       
     
        </div>
        {isLoading&&<div style={
{marginTop:20}
} ><Skeleton height={35}  /></div>}
        {data&&<div className="Pageno"> <div className="pagenoButton">
        
            <ButtonsTransparent height={100} width={10} name="1"/>
            </div>
            <div className="pagenoButton">
        
            <ButtonsTransparent height={100} width={10} name="2"/>
            </div>
            <div className="pagenoButton">
        
            <ButtonsTransparent height={100} width={10} name="3"/>
            </div>
            <div className="pagenoButton">
        
            <ButtonsTransparent height={100} width={10} name="4"/>
            </div>
            </div>}
          <InlineList isLoading={isLoading} name={"Weekly Popular Products"}/>
          {isLoading&&<div style={
{marginTop:20}
} ><Skeleton height={35}  /></div>}
        {data&&<div className="Services-list-name"><p>Services Details</p></div>}
        <div className="Serviece-Card-list">
        {isLoading&&<div style={
{marginTop:20 ,marginLeft:10}
} ><Skeleton height={300} width={400} /></div>}
{isLoading&&<div style={
{marginTop:20 ,marginLeft:10}
} ><Skeleton height={300} width={380}  /></div>}
{isLoading&&<div style={
{marginTop:20 ,marginLeft:10}
} ><Skeleton height={300} width={380}  /></div>}
          {data&&<>
            <ServiceCard name="Frequently Asked Questions" productpic={faq} describtion={"Updates on safe Shopping in our store" }/>
            <ServiceCard name={"Online Payment  Methodes"} productpic={onlinepay} describtion={"How to pay with TeleBirr?"}/>
            <ServiceCard name={"Home Delivery Available Options "} productpic={delivery} describtion={"what are the options for delivery"}/>
            </>}
        </div>
       {isError &&<div style={{ display:'flex',alignItems:"center",justifyContent:"center",height: '500px', width: '100%' }}>
     Page is not ready
          </div>}
    </div>
    </div>      
    </div>);
    
  
        
     

    
   
    
    
}

export default HomePage;