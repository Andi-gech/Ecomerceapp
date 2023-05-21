import NewsCard from "./NewsCard";
import useNews from "./UseNews";

function NewsPage() {
    const { data } = useNews()
    

    return ( <div className="Newspage">
        <div className="NewsTitle">
            <p>Latest Product News</p>
        </div>
        <div className="NewsList">
            {data?.map((item,index)=> <NewsCard key={index} headline={item.Headline} description={item.description}/>)}
           
           
        </div>
    </div>);
}

export default NewsPage;