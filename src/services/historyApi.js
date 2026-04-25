import axios from "axios";

const API_KEY = "hmeEvlwdlifWFeKeyCDWLg66hhCIEAqMSNbqEt4S";

export const fetchHistoryEvents = async () => {
  try {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const res = await axios.get(
      `https://api.api-ninjas.com/v1/historicalevents`,
      {
        params: { month, day },
        headers: {
          "X-Api-Key": API_KEY,
        },
      }
    );

    return res.data.slice(0, 4); 
  } catch (err) {
    console.error("History API error:", err);
    return [];
  }
};