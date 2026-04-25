import { useEffect, useState } from "react";
import { fetchHistoryEvents } from "../services/historyApi";

const HistorySection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchHistoryEvents();
      setEvents(data);
    };

    getEvents();
  }, []);

  return (
    <div className="history-section">
      <h2>On This Day</h2>

      <div className="history-grid">
        {events.map((event, index) => (
          <div key={index} className="history-card">
            <h3>{event.year}</h3>
            <p>{event.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySection;