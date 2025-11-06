import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">© {new Date().getFullYear()} B.A.S. D.O.C. SERIANA COBRAS</p>
        <p className="footer-info">
          Base Associativa Sportiva<br />
          Sede: Via G. Marconi 5, 24021 Albino (BG) - Italia<br />
          Email: <a href="mailto:docserianacobras@gmail.com">docserianacobras@gmail.com</a>
        </p>

        <p className="footer-legal">
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/cookie-policy">Cookie Policy</a> |{" "}
          <a href="/termini-e-condizioni">Termini d'Uso</a>
        </p>

        <p className="footer-note">
          Questo sito non utilizza cookie di profilazione. Eventuali cookie di terze parti
          (es. Instagram o YouTube) sono soggetti alle rispettive informative sulla privacy.
        </p>
      </div>
    </footer>
  );
}

export default Footer;