const NewsItem = ({title, description, url, image}) => {
    return (
        <a href={url} >
            <div className="news-item">
                <img src={image} alt="new image"></img>
                <div className="news-content">
                <h3>
                        {title}
                </h3>
                <p>{description}</p>
                </div>
            </div>
        </a>
    
      );
}
 
export default NewsItem;