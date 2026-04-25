exports.handler = async (event) => {
  const { category = "general", page = 1, query = "" } = event.queryStringParameters;

  const API_KEY = "7e7a5a10416947f756d796e49fc0a625";

  let url = "";

  if (query) {
    url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=6&page=${page}&token=${API_KEY}`;
  } else {
    url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=6&page=${page}&token=${API_KEY}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
};