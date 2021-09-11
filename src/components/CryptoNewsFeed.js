import useApiRequest from "./useApiRequest";
import Loader from "./Loader";
import NewsItem from "./NewsItem";
import PreloadedLogos from "./PreloadedLogos";

const CryptoNewsFeed = () => {
    let { data, error, isLoaded } = useApiRequest(process.env.REACT_APP_CRYPTO_NEWS);

    if (error !== null) {
      return <div> Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <Loader />;
    }

    return (
        <div className="news-feed">
        <PreloadedLogos />
                {data.articles.map(({index, title, description, url, image}) => (
                   <NewsItem key={index} title={title} description={description} url={url} image={image} />
                ) ) }
       </div>
    );
}
 
export default CryptoNewsFeed;