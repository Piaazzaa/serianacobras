import React from "react";
import Swal from "sweetalert2";
import "./Torneo.css";

const Torneo = () => {

  const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  try {
    const res = await fetch("https://serianacobras.onrender.com/send-email", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire("Successo!", "Iscrizione inviata!", "success");
      event.target.reset();
    } else {
      Swal.fire("Errore!", "Invio fallito", "error");
    }
  } catch (err) {
    Swal.fire("Errore!", "Server non raggiungibile", "error");
  }
};

  return (
    <div className="torneo">
      <div className="torneo-form">

        <form onSubmit={onSubmit}>
          <h1 className="contact-title">Torneo Seriana Cobras</h1>

          <p style={{ textAlign: "center", marginBottom: "30px" }}>
            Bentrovati nell'apposita sezione relativa al primo torneo targato Cobras! 🐍 <br />
            Ecco alcune informazioni generali riguardo la manifestazione: <br /> <br />
            - Data 20 Giugno dalle ore 13 alle ore 19 <br />
            - Palazzetto dello Sport di Albino (BG) <br />
            - 18+ <br />
            - Visita medica agonistica obbligatoria <br />
            - Massimo 5 giocatori per squadra <br />
            - Quota di iscrizione 15 € a giocatore <br /> <br />
            Cosa è incluso: <br /> <br />
            - Assicurazione medica <br />
            - 1 drink omaggio offerto da Tiki Beach ItalianOptic <br />
            - Disponibilità degli spogliatoi interni per docce <br />
            - Premi per le prime 3 squadre classificate <br /> <br />
            Qua sotto troverete il modulo dove inserire tutte le informazioni richieste e allegare la visita medica per completare l'iscrizione al torneo! 💜🖤
          </p>

          {/* SEZIONE 1 */}
          <h2 style={{ textAlign: "center", margin: "50px 0" }}>
            Informazioni squadra
          </h2>

          <div className="input-box">
            <label>Nome della squadra</label>
            <input type="text" name="team_name" className="field" required />
          </div>

          <div className="input-box">
            <label>Nome e cognome capitano</label>
            <input type="text" name="captain_name" className="field" required />
          </div>

          <div className="input-box">
            <label>Data di nascita capitano</label>
            <input type="date" name="captain_birth" className="field" required />
          </div>

          <div className="input-box">
            <label>Email</label>
            <input type="email" name="email" className="field" required />
          </div>

          <div className="input-box">
            <label>Numero di telefono</label>
            <input type="tel" name="phone" className="field" required />
          </div>

          <div className="input-box">
            <label>Visita medica capitano</label>
            <input
              type="file"
              name="captain_medical"
              className="field"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.pages"
              required
            />
          </div>

          <div className="input-box">
            <label>Note della squadra</label>
            <textarea name="notes" className="field mess"></textarea>
          </div>

          {/* GIOCATORE 2 */}
          <h2 style={{ textAlign: "center", margin: "50px 0" }}>
            Giocatore 2
          </h2>

          <div className="input-box">
            <label>Nome e cognome</label>
            <input type="text" name="player2_name" className="field" required />
          </div>

          <div className="input-box">
            <label>Data di nascita</label>
            <input type="date" name="player2_birth" className="field" required />
          </div>

          <div className="input-box">
            <label>Visita medica</label>
            <input
              type="file"
              name="player2_medical"
              className="field"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.pages"
              required
            />
          </div>

          {/* GIOCATORE 3 */}
          <h2 style={{ textAlign: "center", margin: "50px 0" }}>
            Giocatore 3
          </h2>

          <div className="input-box">
            <label>Nome e cognome</label>
            <input type="text" name="player3_name" className="field" required />
          </div>

          <div className="input-box">
            <label>Data di nascita</label>
            <input type="date" name="player3_birth" className="field" required />
          </div>

          <div className="input-box">
            <label>Visita medica</label>
            <input
              type="file"
              name="player3_medical"
              className="field"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.pages"
              required
            />
          </div>

                    {/* GIOCATORE 4 */}
          <h2 style={{ textAlign: "center", margin: "50px 0" }}>
            Giocatore 4
          </h2>

          <div className="input-box">
            <label>Nome e cognome</label>
            <input type="text" name="player4_name" className="field" />
          </div>

          <div className="input-box">
            <label>Data di nascita</label>
            <input type="date" name="player4_birth" className="field" />
          </div>

          <div className="input-box">
            <label>Visita medica</label>
            <input
              type="file"
              name="player4_medical"
              className="field"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.pages"
            />
          </div>

                    {/* GIOCATORE 5 */}
          <h2 style={{ textAlign: "center", margin: "50px 0" }}>
            Giocatore 5
          </h2>

          <div className="input-box">
            <label>Nome e cognome</label>
            <input type="text" name="player5_name" className="field" />
          </div>

          <div className="input-box">
            <label>Data di nascita</label>
            <input type="date" name="player5_birth" className="field" />
          </div>

          <div className="input-box">
            <label>Visita medica</label>
            <input
              type="file"
              name="player5_medical"
              className="field"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.pages"
            />
          </div>

          <div className="checkbox-box">
            <input type="checkbox" id="privacy" required />
            <label htmlFor="privacy">
              Dichiaro di aver letto e accettato la{" "}
              <a href="/privacy-policy" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>{" "}
              e acconsento al trattamento dei dati personali, inclusi dati sanitari,
              per l’iscrizione al torneo
            </label>
          </div>

          <div className="checkbox-box">
            <input type="checkbox" id="photos" required  />
            <label>
              Autorizzo l’utilizzo di immagini e video realizzati durante il torneo per finalità
              promozionali dell’associazione
            </label>
          </div>

          <button type="submit">Invia iscrizione</button>
        </form>

      </div>
    </div>
  );
};

export default Torneo;