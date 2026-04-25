import { useEffect, useState } from "react";

const SavedNews = ({ onClose }) => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    setSaved(JSON.parse(localStorage.getItem("savedNews")) || []);
  }, []);

  return (
    <div className="saved-overlay">
      <div className="saved-box">
        <div className="saved-header">
          <h2>Saved Articles</h2>
          <button onClick={onClose}>✖</button>
        </div>

        {saved.length === 0 ? (
          <p>No saved articles</p>
        ) : (
          saved.map((a, i) => <p key={i}>• {a.title}</p>)
        )}
      </div>
    </div>
  );
};

export default SavedNews;