// src/components/Layout/Layout.jsx
import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Container from '../Container';
import './Layout.css';

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="Sobre mim"
            description="Sou um desenvolvedor"
          />
          <Sidebar
            title="Sobre o blog"
            description="Informações sobre o blog"
          />
        </aside>
      </Container>
    </main>
  </div>
);
