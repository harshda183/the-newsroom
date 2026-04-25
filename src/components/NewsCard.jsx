
import React from "react";
import { useEffect, useState } from "react";

const NewsCard = ({ article, onSave, isSaved }) => {
  if (!article) return null;

  const {
    title,
    description,
    url,
    image,
    publishedAt,
    source,
  } = article;

  return (
    <div className="news-card">
      {/* 🖼 Image */}
      <img
        src={image || "https://via.placeholder.com/200x200"}
        alt={title}
        className="news-image"
      />

      {/* 📰 Content */}
      <div className="news-content">
        <h3 className="news-title">{title}</h3>

        <p className="news-description">
          {description || "No description available."}
        </p>

        {/* 🏷 Source + Date */}
        <div className="news-meta">
          <span className="news-source">
            {source?.name || "Unknown Source"}
          </span>

          <span className="news-date">
            {new Date(publishedAt).toLocaleDateString()}
          </span>
        </div>

        {/* 🔗 Actions */}
        <div className="news-actions">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More →
          </a>

          {/* 💾 Save Button */}
          
        </div>
      </div>
    </div>
  );
};

export default NewsCard;