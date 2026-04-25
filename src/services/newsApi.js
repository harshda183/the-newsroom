import axios from "axios";

const API_KEY = "95e5ca376e3c4a518fcff277da97b59f";

export const fetchTopHeadlines = async (
  category = "general",
  page = 1,
  query = ""
) => {
  try {
    let url = "";
    let params = {
      apiKey: API_KEY,
      page,
      pageSize: 6,
    };

    if (query && query.trim() !== "") {
      // 🔥 SEARCH WORKS HERE
      url = "https://newsapi.org/v2/everything";
      params.q = query;
      params.sortBy = "publishedAt";
      params.language = "en";
    } else {
      // 🔥 NORMAL NEWS
      url = "https://newsapi.org/v2/top-headlines";
      params.country = "us";
      params.category = category;
    }

    const res = await axios.get(url, { params });

    console.log("API RESULT:", res.data); // DEBUG

    return res.data;
  } catch (err) {
    console.error("API ERROR:", err);
    return { articles: [], totalResults: 0 };
  }
};