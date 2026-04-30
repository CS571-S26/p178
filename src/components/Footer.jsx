import React from "react";

export default function Footer() {
    return (
        <footer style={{
            marginTop: "80px",
            padding: "30px 20px",
            borderTop: "1px solid #e5e4e7",
            textAlign: "center",
            fontSize: "14px",
            color: "#6b6375",
            background: "var(--bg)"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap",
                marginBottom: "10px"
            }}>
                <div>
                    <strong>Contact Email</strong><br />
                    CultOfCarlin@yourapp.com
                </div>

                <div>
                    <strong>Phone</strong><br />
                    +1 (555) 123-4567
                </div>

                <div>
                    <strong>FAQ</strong><br />
                    <p style={{ color: "#aa3bff", textDecoration: "none" }}>
                        Visit FAQ
                    </p>
                </div>
                <div style={{fontSize: "12px", opacity: 0.9 }}>
                    <p>
                        This site is not affiliated with any official estate, organization, or institution. \n
                    </p>
                    <p>
                        Mostly because institutions tend to ruin things.
                    </p>
                </div>
            </div>

            <div style={{ marginTop: "10px", fontSize: "12px", opacity: 0.7 }}>
                © {new Date().getFullYear()} Mine! All rights reserved.
            </div>
        </footer>
    );
}