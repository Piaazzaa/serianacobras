import React from "react";
import "./LegalPages.css";

function CookiePolicy() {
  return (
    <main className="legal-page">
      <h1>Cookie Policy</h1>
      <p>
        Questo sito utilizza solo cookie tecnici necessari al corretto funzionamento
        del sito stesso. Non vengono utilizzati cookie di profilazione o tracciamento.
      </p>

      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati inviano al browser
        dell’utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi
        siti durante la navigazione successiva.
      </p>

      <h2>2. Tipi di cookie utilizzati</h2>
      <ul>
        <li><strong>Cookie tecnici:</strong> indispensabili per la navigazione e per garantire la fruizione del sito.</li>
        <li><strong>Cookie di terze parti:</strong> possono essere presenti solo se si interagisce con contenuti esterni (es. post Instagram, video YouTube).</li>
      </ul>

      <h2>3. Gestione dei cookie</h2>
      <p>
        L’utente può disattivare i cookie attraverso le impostazioni del proprio browser.
        Tuttavia, la disattivazione dei cookie tecnici può compromettere alcune funzionalità del sito.
      </p>

      <h2>4. Aggiornamenti</h2>
      <p>
        Questa Cookie Policy potrà essere aggiornata periodicamente. Ultimo aggiornamento: {new Date().getFullYear()}.
      </p>
    </main>
  );
}

export default CookiePolicy;