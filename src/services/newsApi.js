// import axios from "axios";

// const API_KEY = "95e5ca376e3c4a518fcff277da97b59f";

// export const fetchTopHeadlines = async (
//   category = "general",
//   page = 1,
//   query = ""
// ) => {
//   try {
//     let url = "";
//     let params = {
//       apiKey: API_KEY,
//       page,
//       pageSize: 6,
//     };

//     if (query && query.trim() !== "") {
//       // 🔥 SEARCH WORKS HERE
//       url = "https://newsapi.org/v2/everything";
//       params.q = query;
//       params.sortBy = "publishedAt";
//       params.language = "en";
//     } else {
//       // 🔥 NORMAL NEWS
//       url = "https://newsapi.org/v2/top-headlines";
//       params.country = "us";
//       params.category = category;
//     }

//     const res = await axios.get(url, { params });

//     console.log("API RESULT:", res.data); // DEBUG

//     return res.data;
//   } catch (err) {
//     console.error("API ERROR:", err);
//     return { articles: [], totalResults: 0 };
//   }
// };

// import axios from "axios";

// const API_KEY = "";

// export const fetchTopHeadlines = async (
//   category = "general",
//   page = 1,
//   query = ""
// ) => {
//   try {
//     let url = "";

//     if (query && query.trim() !== "") {
//       // 🔍 Search
//       url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=6&page=${page}&token=${API_KEY}`;
//     } else {
//       // 📰 Headlines
//       url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=6&page=${page}&token=${API_KEY}`;
//     }

//     const res = await axios.get(url);

//     return {
//       articles: res.data.articles || [],
//       totalResults: res.data.totalArticles || 0,
//     };
//   } catch (err) {
//     console.error("API ERROR:", err);
//     return { articles: [], totalResults: 0 };
//   }
// };

import axios from "axios";

export const fetchTopHeadlines = async (
  category = "general",
  page = 1,
  query = ""
) => {
  try {
    const res = await axios.get("/.netlify/functions/news", {
      params: { category, page, query },
    });

    return {
      articles: res.data.articles || [],
      totalResults: res.data.totalArticles || 0,
    };
  } catch (err) {
    console.error("API ERROR:", err);
    return { articles: [], totalResults: 0 };
  }
};