
import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../services/newsApi";
import NewsCard from "./NewsCard";
import Sidebar from "./Sidebar";

const FeaturedNews = ({ category, search }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 6;

  // ✅ DEFINE FUNCTION HERE
  const getNews = async () => {
    if (loading) return;

    setLoading(true);

    const data = await fetchTopHeadlines(category, page, search);

    setArticles(data.articles || []);
    setTotalResults(data.totalResults || 0);

    setLoading(false);
  };

  // Reset page
  useEffect(() => {
    setPage(1);
  }, [category, search]);

  // ✅ USE IT HERE
  useEffect(() => {
    const delay = setTimeout(() => {
      getNews();
    }, 700);

    return () => clearTimeout(delay);
  }, [category, page, search]);

  const totalPages = Math.min(Math.ceil(totalResults / pageSize), 10);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <>
      <div className="layout">
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
                <div key={i}>
                  <NewsCard article={a} />
                </div>
              ))}
            </div>
          )}
        </div>

        <Sidebar articles={articles} />
      </div>

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