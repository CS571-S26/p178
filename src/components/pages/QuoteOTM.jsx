import React, { memo, useState } from "react"

function QuoteOTM () {

    const options = [
        { title: "Option 1", desc: "First quote candidate" },
        { title: "Option 2", desc: "Second quote candidate" },
        { title: "Option 3", desc: "Third quote candidate" }
    ];
    
    const isLoggedIn = true; // This would come from your auth context or state

    const [hasVoted, setHasVoted] = useState(
        localStorage.getItem("voted") === "true"
    );

    const [votes, setVotes] = useState(() => {
        const saved = localStorage.getItem("votes");
        return saved ? JSON.parse(saved) : [0, 0, 0];
    });

    const [selectedOption, setSelectedOption] = useState(
        localStorage.getItem("votedOption")
            ? Number(localStorage.getItem("votedOption"))
            : null
    );

    const handleVote = (index) => {
        setSelectedOption(index);
        localStorage.setItem("votedOption", index);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
            <h1>Quote Of The MONTH</h1>
            <p style={{ maxWidth: "700px", margin: "0 auto 30px" }}>
                This Month's Featured Quote is from one of George's last specials. It's called "A Modern Man". He flawlessly and skillfully delivers a powerful message in a fun way via a tongue twister. This clip was Voted By the Community, For the Community!
            </p>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6MVABINRzN4"
                    title="YouTube video player"
                    style={{
                        border: "none",
                        borderRadius: "16px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div style={{
                margin: "80px 0 40px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.5rem"
            }}>
                Vote for Next Month's Quote <br />
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                maxWidth: "900px",
                margin: "0 auto"
            }}>
                {options.map((opt, i) => (
                    <div key={i} style={{
                        padding: "20px",
                        borderRadius: "16px",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                        background: selectedOption == i ? "#e6f4ea" : "#fff",
                        border: selectedOption == i ? "2px solid #28a745" : "none",
                        textAlign: "center"
                    }}>
                        <h3>{opt.title}</h3>
                        <p>{opt.desc}</p>

                        {isLoggedIn ? (
                            <button
                                onClick={() => handleVote(i)}
                                style={{
                                    marginTop: "10px",
                                    padding: "10px 20px",
                                    borderRadius: "8px",
                                    border: "none",
                                    background: selectedOption === i ? "#28a745" : "#007bff",
                                    color: "white",
                                    cursor: "pointer",
                                    opacity: selectedOption === i ? 1 : 0.9
                                    }}
                                >
                                {selectedOption === i ? "Selected Vote" : "Vote"}
                            </button>
                        ) : <p>Login to vote</p>}
                    </div>
                ))}
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
                padding: "0 40px",
                marginBottom: "80px" // 👈 adds space below cards
            }}>
            </div>
        </div>
    )
}

export default memo(QuoteOTM);