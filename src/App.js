import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main role="main" className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="Biologic logo" title="Biologic Logo" />
        <section className="text-container">
          <p>We are Biologic. <i className="fas fa-vial"></i><br /> We ♥︎ process efficiencies.<br /> Let us optimize your growth within the cannabis industry.
          </p>
          <p>
            <a
                className="app-link"
                title="Contact Us"
                alt="Contact Us"
                href="mailto:info@biologic.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@biologic.consulting
            </a>
          </p>

        </section>
      </header>
    </main>
  );
}

export default App;
