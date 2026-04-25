import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../services/newsApi";
import NewsCard from "./NewsCard";
import Sidebar from "./Sidebar";

const FeaturedNews = ({ category, search }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 6; 

  // Reset page when category/search changes
  useEffect(() => {
    setPage(1);
  }, [category, search]);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);

      const start = Date.now();

      const data = await fetchTopHeadlines(category, page, search);

      const elapsed = Date.now() - start;
      const delay = Math.max(800 - elapsed, 0);

      setTimeout(() => {
        setArticles(data.articles || []);
        setTotalResults(data.totalResults || 0);
        setLoading(false);
      }, delay);
    };

    getNews();
  }, [category, page, search]);

  // Pagination logic
  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <>
      <div className="layout">

        {/* LEFT */}
        <div className="main-news">
          {loading ? (
            <div className="grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card skeleton-card"></div>
              ))}
            </div>
          ) : (
            <div className="grid">
              {articles.map((a, i) => (
                <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <NewsCard article={a} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <Sidebar articles={articles} />
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          ← Previous
        </button>

        <span>
          Page {page} of {totalPages || 1}
        </span>

        <button onClick={handleNext} disabled={page === totalPages}>
          Next →
        </button>
      </div>
    </>
  );
};

export default FeaturedNews;