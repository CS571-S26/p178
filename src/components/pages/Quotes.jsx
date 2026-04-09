import React from "react";
import QuoteCards from "./QuoteCards";
import carlinQuotes from "../carlinQuotes";

const Quotes = () => {

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Inspirational Quotes</h1>
      <div style={styles.grid}>
        {carlinQuotes.map((item, index) => (
          <QuoteCards
            key={index}
            quote={item.quote}
            special={item.special}
            year={item.year}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default Quotes;