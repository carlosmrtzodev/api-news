import "./News.css";
import moment from "moment";
import { useState } from "react";

const News = ({ id, author, story_title, story_url, created_at, favorite }) => {
  const [likes, setLikes] = useState(false);

  const object = {
    id: id,
    author: author,
    story_url: story_url,
    created_at: created_at,
    story_title: story_title,
  };

  const handleClick = () => {
    var favorites = JSON.parse(localStorage.getItem("fav"));

    if (likes) {
      setLikes(false);
      var newFavorites = favorites.filter((item) => item.id !== id);
      localStorage.setItem("fav", JSON.stringify(newFavorites));
    } else {
      setLikes(true);
      favorites ? favorites.push(object) : (favorites = [object]);
      localStorage.setItem("fav", JSON.stringify(favorites));
    }
  };

  return (
    <div className='news'>
      <a href={story_url} className='news__container'>
        <div className='news__container-content'>
          <span className='news__container-content_created'>
            <figure>
              <img
                src='./time.svg'
                className='news__container-content_created-icon'
              />{" "}
            </figure>
            {moment(created_at).fromNow()} by {author}
          </span>

          <h2 className='news__container-content_title'>{story_title}</h2>
        </div>
      </a>

      {favorite ? (
        <div className='news__likes'>
          <figure>
            <img src='./heart-fill.svg' alt='Likes' />
          </figure>
        </div>
      ) : (
        <div className='news__likes' onClick={handleClick}>
          <figure className='news__likes-image'>
            <img src={likes ? "./heart-fill.svg" : "./heart.svg"} alt='Likes' />
          </figure>
        </div>
      )}
    </div>
  );
};

export { News };
