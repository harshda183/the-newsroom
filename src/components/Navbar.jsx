const Navbar = ({ setCategory }) => {
  const links = [
    "general",
    "business",
    "technology",
    "sports",
    "entertainment",
  ];

  return (
    <div className="navbar">
      {links.map((link) => (
        <span key={link} onClick={() => setCategory(link)}>
          {link.toUpperCase()}
        </span>
      ))}
    </div>
  );
};

export default Navbar;