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
            Inserisci qui la descrizione del torneo, regolamento e informazioni.
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

          <button type="submit">Invia iscrizione</button>
        </form>

      </div>
    </div>
  );
};

export default Torneo;