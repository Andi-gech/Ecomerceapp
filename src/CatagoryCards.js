import { Link } from "react-router-dom";

function Catagorycard({image,name,id}) {
    
    return (  <Link to={`products/${name}`}  state={{id:id}}><div className="Catagorycard" style={{    backgroundImage: `url(${image})`,}}> <p>{name}</p></div></Link>
    );
}

export default Catagorycard;