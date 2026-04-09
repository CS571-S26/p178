import React from "react";

const QuoteCards = ({ quote, special, year }) => {
  return (
    <div style={styles.card}>
        <p style={styles.quote}>"{quote}"</p>
        <h4>- {special} ({year})</h4>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "20px",
    margin: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "300px",
  },
  quote: {
    fontSize: "16px",
    fontStyle: "italic",
  },
  author: {
    marginTop: "10px",
    textAlign: "right",
    color: "#555",
  },
};

export default QuoteCards;