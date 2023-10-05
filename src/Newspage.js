import NewsCard from "./NewsCard";
import useNews from "./UseNews";

function NewsPage() {
  const { data } = useNews();

  return (
    <div className="mt-[60px] bg-white   dark:bg-zinc-900 min-h-screen flex items-center flex-col">
      <div className="NewsTitle">
        <p>Latest Product News</p>
      </div>
      <div className=" w-full sm:w-1/3 h-[200px]">
        {data?.map((item, index) => (
          <NewsCard
            key={index}
            headline={item.Headline}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
