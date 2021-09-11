import useApiRequest from "./useApiRequest";
import Loader from "./Loader";
import NewsItem from "./NewsItem";
import coinLogos from "../files/coinsLogos";
import { Link } from "react-router-dom";

const CryptoNewsFeed = () => {
    let { data, error, isLoaded } = useApiRequest(process.env.REACT_APP_CRYPTO_NEWS);

    if (error !== null) {
      return <div> Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <Loader />;
    }
     coinLogos.map((coin) => console.log('id - ' + coin['id'] + ' \n url - ' + coin['image']));

    return (
        <div className="news-feed">
          { coinLogos.map((coin) =>( <Link rel="preload" to={coin['image']} data-id={coin['id']} as="image" />))}
                {data.articles.map(({index, title, description, url, image}) => (
                   <NewsItem key={index} title={title} description={description} url={url} image={image} />
                ) ) }
       </div>
    );
}
 
export default CryptoNewsFeed;