const Sidebar = ({ articles }) => {
  return (
    <div className="sidebar">
      <h2>Latest Headlines</h2>

      {articles.slice(0, 8).map((article, index) => (
        <div key={index} className="sidebar-item">
          <p>{article.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;