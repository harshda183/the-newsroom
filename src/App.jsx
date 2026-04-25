import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FeaturedNews from "./components/FeaturedNews";
import QuoteSection from "./components/QuoteSection";
import HistorySection from "./components/HistorySection";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";
import SavedNews from "./components/SavedNews";
import "./App.css";

function App() {
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  // 🔍 Debounce
  useEffect(() => {
    const t = setTimeout(() => setSearch(tempSearch), 500);
    return () => clearTimeout(t);
  }, [tempSearch]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="container">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenSaved={() => setShowSaved(true)}
        />
        <Ticker />

        <Navbar setCategory={setCategory} />

        {/* DARK MODE BUTTON */}
        <div className="theme-toggle">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
          </button>
        </div>

        {/*SEARCH */}
        <div className="search-bar">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search latest news..."
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
            />
          </div>
        </div>

        {/* HERO */}
        <div className="hero">
          <h1>NEWS</h1>
          <p>THE MOST IMPORTANT NEWS AROUND THE WORLD</p>
          <div className="divider">
            <span className="line"></span>
            <span className="icon">✦</span>
            <span className="line"></span>
          </div>
        </div>

        {/*NEWS */}
        <FeaturedNews category={category} search={search} />
        

        {/* SAVED (modal-like section) */}
        {showSaved && (
          <SavedNews onClose={() => setShowSaved(false)} />
        )}
      </div>
      <QuoteSection />
        <HistorySection />
      
        {/* Footer OUTSIDE container */}

      <Footer />
    </div>
  );
}

export default App;