import useApiRequest from "./useApiRequest";
import Loader from "./Loader";
import NewsItem from "./NewsItem";

const NftNewsFeed = () => {
    let { data, error, isLoaded } = useApiRequest(process.env.REACT_APP_NFT_NEWS);

    if (error !== null) {
      return <div> Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <Loader />;
    }
    return (
        <div className="nfts">
             <div className="news-feed">
                {data.articles.map(({index, title, description, url, image}) => (
                    <NewsItem id={index} title={title} description={description} url={url} image={image}  />
                  ) ) }
            </div>
        </div>
    );
  };

 
export default NftNewsFeed;