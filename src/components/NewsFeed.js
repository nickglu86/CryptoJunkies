import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);

    useEffect( () => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/everything?q=crypto&from=2021-08-30&sortBy=popularity&apiKey=2df2efdecd10476b97305d5c4a8b7825");

            setArticles(res.data.articles);
            console.log(res);
        }
        getArticles();
    } ,[]); 

    return (
        <div className="news-feed">
                {articles.map(({title, description, url, urlToImage}) => (
                   <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} />
                ) ) }
       </div>
    );
}
 
export default NewsFeed;