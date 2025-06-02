import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-preference");
    if (!saved) {
      setIsVisible(true);
    }
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem("cookie-preference", choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        background: "#222",
        color: "#fff",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 1000,
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <p style={{ marginBottom: "12px" }}>
        We use cookies to improve your experience. You can accept, deny, or customize your preferences.
      </p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={() => handleChoice("accepted")}
          style={{
            padding: "8px 16px",
            background: "#4caf50",
            border: "none",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Accept
        </button>
        <button
          onClick={() => handleChoice("denied")}
          style={{
            padding: "8px 16px",
            background: "#f44336",
            border: "none",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Deny
        </button>
        <button
          onClick={() => alert("Customize not implemented yet")}
          style={{
            padding: "8px 16px",
            background: "#2196f3",
            border: "none",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Customize
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
