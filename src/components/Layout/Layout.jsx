// src/components/Layout/Layout.jsx
import React from 'react';
import Header from '../Header';
import './Layout.css';

export default ({ children, title }) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
    }}
  >
    <Header title={title} />
    <main role="main">
      {children}
    </main>
  </div>
);
