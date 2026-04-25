import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 📩 Handle Subscribe
  const handleSubscribe = () => {
    // simple email validation
    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email");
      return;
    }

    // simulate success
    setMessage("✅ Subscribed successfully!");
    setEmail(""); // clear input
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        
        {/* Brand */}
        <div className="footer-brand">
          <h2>THE NEWSROOM</h2>
          <p>Delivering trusted news from around the world.</p>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Get daily headlines in your inbox</p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>

          {/* MESSAGE */}
          {message && <p className="message">{message}</p>}
            </div>
              <div className="footer-section">
              <h4>Sections</h4>
              <span>General</span>
              <span>Business</span>
              <span>Technology</span>
              <span>Sports</span>
              <span>Entertainment</span>
            </div>

        

        {/* Social */}
        <div className="footer-section">
          <h4>Follow</h4>
          <div className="socials">
            <span>🌐</span>
            <span>🐦</span>
            <span>📸</span>
            <span>▶</span>
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© 2026 The Newsroom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;