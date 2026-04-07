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
        Il sito può raccogliere dati personali forniti volontariamente dagli utenti tramite
        moduli di contatto e iscrizione ad eventi sportivi (es. tornei).
      </p>
      <p>
        I dati raccolti possono includere:
        <br />- Nome e cognome
        <br />- Data di nascita
        <br />- Email e numero di telefono
        <br />- Nome della squadra
        <br />- Eventuali note fornite dall’utente
        <br />- Documenti allegati, tra cui certificati medici per l’idoneità sportiva
      </p>

      <h2>3. Finalità del trattamento</h2>
      <p>
        I dati personali raccolti vengono trattati esclusivamente per:
        <br />- Gestione delle iscrizioni a tornei ed eventi sportivi
        <br />- Verifica dei requisiti di partecipazione (es. certificati medici)
        <br />- Comunicazioni organizzative relative agli eventi
      </p>
      <p>
        I dati non vengono utilizzati per finalità di marketing né ceduti a terzi.
      </p>

      <h2>4. Conservazione dei dati</h2>
      <p>
        I dati personali vengono conservati per il tempo strettamente necessario alla
        gestione dell’evento sportivo e successivamente cancellati.
      </p>
      <p>
        I documenti allegati (es. certificati medici) non vengono archiviati in modo
        permanente e vengono utilizzati esclusivamente per la verifica dei requisiti
        di partecipazione.
      </p>

      <h2>5. Trattamento di dati particolari</h2>
      <p>
        Alcuni dati richiesti, come i certificati medici, rientrano nelle categorie
        particolari di dati personali ai sensi dell’art. 9 del GDPR.
      </p>
      <p>
        Tali dati vengono trattati esclusivamente per consentire la partecipazione alle
        attività sportive e nel rispetto delle normative vigenti.
      </p>

      <h2>6. Diritti dell’interessato</h2>
      <p>
        L’utente può in qualsiasi momento richiedere l’accesso, la rettifica o la
        cancellazione dei propri dati inviando un’email a{" "}
        <a href="mailto:docserianacobras@gmail.com">docserianacobras@gmail.com</a>.
      </p>

      <h2>7. Modifiche</h2>
      <p>
        Questa informativa potrà essere aggiornata periodicamente. Si consiglia di
        consultarla regolarmente per eventuali modifiche.
      </p>
    </main>
  );
}

export default PrivacyPolicy;