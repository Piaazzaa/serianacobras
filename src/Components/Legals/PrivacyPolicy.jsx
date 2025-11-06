import React from "react";
import "./LegalPages.css";

function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <h1>Informativa sulla Privacy</h1>
      <p>
        Ai sensi del Regolamento UE 2016/679 (“GDPR”), la Base Associazione Sportiva
        (BAS) <strong>D.O.C. Seriana Cobras</strong> tutela la privacy degli utenti
        del proprio sito web e garantisce che il trattamento dei dati personali
        sia conforme ai principi di liceità, correttezza e trasparenza.
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        B.A.S. D.O.C. SERIANA COBRAS <br />
        Sede: Via G. Marconi 5, 24021 Albino (BG), Italia <br />
        Email: <a href="mailto:docserianacobras@gmail.com">docserianacobras@gmail.com</a>
      </p>

      <h2>2. Tipologia di dati raccolti</h2>
      <p>
        Il sito non raccoglie dati personali degli utenti, salvo quelli forniti
        volontariamente tramite contatto email o modulo di contatto (se presente).
        Non vengono effettuate registrazioni o profilazioni degli utenti.
      </p>

      <h2>3. Finalità del trattamento</h2>
      <p>
        I dati eventualmente ricevuti vengono trattati esclusivamente per rispondere
        a richieste di informazioni o per comunicazioni legate alle attività sportive
        dell’associazione.
      </p>

      <h2>4. Conservazione dei dati</h2>
      <p>
        I dati vengono conservati solo per il tempo necessario a rispondere alle
        richieste dell’utente e non vengono ceduti a terzi.
      </p>

      <h2>5. Diritti dell’interessato</h2>
      <p>
        L’utente può in qualsiasi momento richiedere l’accesso, la rettifica o la
        cancellazione dei propri dati inviando un’email a{" "}
        <a href="mailto:docserianacobras@gmail.com">docserianacobras@gmail.com</a>.
      </p>

      <h2>6. Modifiche</h2>
      <p>
        Questa informativa potrà essere aggiornata periodicamente. Si consiglia di
        consultarla regolarmente per eventuali modifiche.
      </p>
    </main>
  );
}

export default PrivacyPolicy;