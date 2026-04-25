import { useEffect, useState } from "react";

const NewsCard = ({ article }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSaved(list.some((a) => a.url === article.url));
  }, [article.url]);

  const toggleSave = () => {
    const list = JSON.parse(localStorage.getItem("savedNews")) || [];

    if (saved) {
      const updated = list.filter((a) => a.url !== article.url);
      localStorage.setItem("savedNews", JSON.stringify(updated));
      setSaved(false);
    } else {
      localStorage.setItem(
        "savedNews",
        JSON.stringify([...list, article])
      );
      setSaved(true);
    }
  };

  return (
    <div className="card">
      <img
        src={article.urlToImage || "https://via.placeholder.com/400x200"}
        alt="news"
      />

      <div className="card-content">
        <h3>{article.title || "No Title Available"}</h3>

        <p>{article.description || "No description available."}</p>

        <div className="card-footer">
          <a href={article.url} target="_blank" rel="noreferrer">
            Read More →
          </a>

          <button className="save-btn" onClick={toggleSave}>
            {saved ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;