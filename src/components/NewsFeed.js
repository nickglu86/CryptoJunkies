import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);

    useEffect( () => {
        axios.get('https://gnews.io/api/v4/search?q=crypto&token=9e855350d69e4b90fc112768700fa185')
        .then(res => {
            setArticles(res.data.articles);
        })
        .catch(error => console.log(error));
    } ,[]); 

    return (
        <div className="news-feed">
                {articles.map(({title, description, url, image}) => (
                   <NewsItem title={title} description={description} url={url} image={image} />
                ) ) }
       </div>
    );
}
 
export default NewsFeed;