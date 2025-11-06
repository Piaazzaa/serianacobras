import React from "react";
import "./Store.css";
import { ShoppingBag } from "lucide-react"; // icona carina opzionale

export default function Store() {
  return (
    <div className="store-container">
      <div className="store-content">
        <ShoppingBag className="store-icon" size={64} />
        <h1 className="store-title">Store Seriana Cobras</h1>
        <p className="store-text">
          Il negozio ufficiale non è ancora disponibile,<br />
          ma sarà presto online! 🐍💜
        </p>
        <div className="store-status">🚧 In costruzione 🚧</div>
      </div>
    </div>
  );
}