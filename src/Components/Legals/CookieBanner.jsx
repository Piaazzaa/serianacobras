import React, { useState, useEffect } from "react";
import "./CookieBanner.css";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Questo sito utilizza solo cookie tecnici e, se presenti, cookie di terze parti
        (es. Instagram o YouTube). Proseguendo la navigazione accetti la nostra{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>
      <button onClick={acceptCookies}>OK, ho capito</button>
    </div>
  );
}

export default CookieBanner;