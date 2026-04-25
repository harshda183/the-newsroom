const Ticker = ({ articles = [] }) => {
  // fallback text if no articles passed
  const items =
    articles.length > 0
      ? articles
      : [
          { title: "Breaking: Markets surge amid tech rally" },
          { title: "Sports: Series win sparks celebrations" },
          { title: "World: New policy talks underway" },
        ];

  return (
    <div className="ticker">
      <span className="label">🔥 Breaking:</span>
      <div className="scroll">
        {items.map((a, i) => (
          <span key={i}>{a.title} • </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;