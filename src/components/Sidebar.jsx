// const Sidebar = ({ articles }) => {
//   return (
//     <div className="sidebar">
//       <h2>Latest Headlines</h2>

//       {articles.slice(0, 8).map((article, index) => (
//         <div key={index} className="sidebar-item">
//           <p>{article.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;

const Sidebar = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="sidebar">
        <h2>Latest Headlines</h2>
        <p>No news available</p>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <h2>Latest Headlines</h2>

      {articles.slice(0, 5).map((article, index) => (
        <div key={index} className="sidebar-item">
          <p>{article.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;