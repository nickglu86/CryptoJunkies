import imgBcg from '../imgs/img-filler.jpg';

const NewsItem = ({title, description, url, image}) => {
    return (
        <a href={url} >
            <div className="news-item">
                <figure >
                     <img src={image} alt="new image"></img>
                </figure>
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