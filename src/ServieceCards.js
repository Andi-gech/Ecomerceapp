
function ServiceCard({name,describtion,productpic}) {
    return ( <div className="ServieceCard"> 
    <div><p id="ServiceTitle">{name}</p>
    <p id="servicedesctiption">{describtion}</p></div>
    
    <div className="ServiceImage" style={{ backgroundImage: `url(${productpic})`}}></div></div> );
}

export default ServiceCard;