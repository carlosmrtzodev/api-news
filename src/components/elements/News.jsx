import "./News.css";
import moment from "moment";
import { useState } from "react";
import time from "../../assets/icons/time.svg";
import heart from "../../assets/icons/heart.svg";
import heartfill from "../../assets/icons/heart-fill.svg";

//News.
const News = ({ id, author, story_title, story_url, created_at, fav }) => {
  const [like, setLike] = useState(false);

  //Default obj to set in LocalSotrage.
  const obj = {
    id: id,
    author: author,
    story_url: story_url,
    created_at: created_at,
    story_title: story_title,
  };

  //Save an array of obj to LocalStorage.
  const handleClick = () => {
    var favo = JSON.parse(localStorage.getItem("fav"));

    if (like) {
      setLike(false);
      var newfavo = favo.filter((item) => item.id !== id);
      localStorage.setItem("fav", JSON.stringify(newfavo));
    } else {
      setLike(true);
      favo ? favo.push(obj) : (favo = [obj]);
      localStorage.setItem("fav", JSON.stringify(favo));
    }
  };

  return (
    <div className="news">
      <a href={story_url} className="news__container">
        <div className="news__container-content">
          <span className="news__container-content_created">
            <img src={time} className="news__container-content_created-icon " />{" "}
            {moment(created_at).fromNow()} by {author}
          </span>

          <p className="news__container-content_title">{story_title}</p>
        </div>
      </a>

      {fav ? (
        <div className="news__like">
          <img src={heartfill} alt="Like" />
        </div>
      ) : (
        <div className="news__like" onClick={handleClick}>
          <img src={like ? heartfill : heart} alt="Like" />
        </div>
      )}
    </div>
  );
};
export default News;
