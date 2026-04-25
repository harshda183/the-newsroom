import { useEffect, useState } from "react";

const quotes = [
  {
    text: "The only reason to be alive is to enjoy it.",
    author: "Rita Mae Brown",
    image: "https://gcp-na-images.contentstack.com/v3/assets/bltea6093859af6183b/blte7edf3c4add5cd9d/698a4ac0b3fce3dade0cbfa3/360_brown_q_a_0318.jpg?branch=production",
  },
  {
    text: "You cannot hope to build a better world without improving the individuals.",
    author: "Marie Curie",
    image: "https://cdn.britannica.com/71/190971-050-9BDF80DF/Physicist-Marie-Curie-circa-1900.jpg",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    image: "https://imageio.forbes.com/specials-images/imageserve/5b8576db31358e0429c734e3/0x0.jpg?format=jpg&crop=2170,2172,x211,y900,safe&height=416&width=416&fit=bounds",
  },
  {
    text: "I don't think of all the misery, but of the beauty that still remains.",
    author: "Anne Frank",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hw_5te9p-pdkTlhBkgMACsnp1fxQ2qnbzCZTroXHeGVnBagln08g8N8ZnBcRRlTJAI4eZiuaM-XIpiUnhOLZS72z6k73JWVna9aWgHU&s=10",
  },
  {
    text: "Courage is not the absence of fear, but the triumph over it.",
    author: "Neerja Bhanot",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc9YdeuLrv07qFr5VwqGEtDZPFmzOBpX4wlAgEQYOOdzJ2ZIg9-ItsBdl7_PO2NYsz0mU-cMVkIN2KW83frV4PEEEY-zm1fa1mGUVDg&s=10",
  },
  {
    text: "The secret of political bargaining is to look stronger than what you really are.",
    author: "Subhas Chandra Bose",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Subhas_Chandra_Bose_NRB.jpg",
  },
];

const QuoteSection = () => {
  const today = new Date();
  const quote = quotes[today.getDate() % quotes.length];

  return (
    <div className="quote-card">
      <div className="quote-icon">✿</div>

      <h2>Quote of the Day</h2>

      <p className="quote-date">
        {today.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <p className="quote-text">“{quote.text}”</p>

      <p className="quote-author">— {quote.author}</p>

      <img src={quote.image} alt="author" className="quote-img" />

      <p className="quote-note">(new quote generates daily)</p>
    </div>
  );
};

export default QuoteSection;