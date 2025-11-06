import React from "react";
import instagramLogo from "../../Graphics/Utilità/instagram.png"
import "./Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-content">
        <h1 className="home-title">Seriana Cobras</h1>
        <p className="home-subtitle">Passione. Energia. Squadra.</p>

        <p className="home-message">
          Rimani aggiornato su <strong>partite, eventi e novità</strong>:
          seguici su Instagram!
        </p>

        <a
          href="https://www.instagram.com/serianacobras"
          className="instagram-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src= {instagramLogo}
            alt="Instagram"
            className="instagram-icon"
          />
          Seguici su Instagram
        </a>
      </div>
    </main>
  );
}