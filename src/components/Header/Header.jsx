// src/components/Header/Header.jsx
import React from 'react';

export default ({ title }) => (
  <header className="header" style={{ marginTop: "200px" }}>
    <h1
      className="header-title"
      style={{
        fontSize: "50px",
        fontWeight: "bold",
        color: "#111D13"
        }}
      >
        {title}
      </h1>
  </header>
)
