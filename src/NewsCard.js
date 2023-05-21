import bannerimage4 from "./assets/s.jpg";

function NewsCard({headline,description}) {
    return ( <div className="NewsCard">
        <div className="Newstext"><h3>{headline}</h3>
        <p>{description}</p></div>
        <div className="Newsimage">
            <img  src={bannerimage4} alt="bannerimg"/>
        </div>
    </div> );
}

export default NewsCard;