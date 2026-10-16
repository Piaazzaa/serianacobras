import React from "react";
import './Campionato.css';

const risultati = [
  { numero: 1, data: "14/10/2026", ora: "21:15", casa: "Pol. Bees Madignano", puntiCasa: 54, puntiOspite: 65, ospite: "D.O.C. Seriana Cobras" },
  { numero: 2, data: "23/10/2026", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Colognola 46ers" },
  { numero: 3, data: "30/10/2026", ora: "21:30", casa: "Pol. Vall'Alta", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 4, data: "06/11/2026", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Colognola Fly" },
  { numero: 5, data: "12/11/2026", ora: "21:00", casa: "Fervens Vertova", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 6, data: "20/11/2026", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Potascè Basket" },
  { numero: 7, data: "25/11/2026", ora: "21:30", casa: "Sebino Basket", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 8, data: "04/12/2026", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Scanzorosciate" },
  { numero: 9, data: "11/12/2026", ora: "21:00", casa: "Pro.Bas Gorlago", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 10, data: "18/12/2026", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Fiore Outlanders" },
  { numero: 11, data: "14/01/2027", ora: "21.30", casa: "69ers Grumello", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 12, data: "22/01/2027", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Pol. Bees Madignano" },
  { numero: 13, data: "29/01/2027", ora: "21:00", casa: "Colognola 46ers", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 14, data: "05/02/2027", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Pol. Vall'Alta" },
  { numero: 15, data: "11/02/2027", ora: "21:00", casa: "Colognola Fly", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 16, data: "19/02/2027", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Fervens Vertova" },
  { numero: 17, data: "26/02/2027", ora: "21:15", casa: "Potascè Basket", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 18, data: "05/03/2027", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Sebino Basket" },
  { numero: 19, data: "11/03/2027", ora: "21:30", casa: "Scanzorosciate", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 20, data: "19/03/2027", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Pro.Bas Gorlago" },
  { numero: 21, data: "01/04/2027", ora: "21:00", casa: "Fiore Outlanders", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 22, data: "09/04/2027", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "69ers Grumello" },
];

const classifica = [
  { posizione: 1, squadra: "Scanzorosciate", punti: 3, giocate: 1, vinte: 1, perse: 0, puntiFatti: 78, puntiSubiti: 62, diff: 16 },
  { posizione: 2, squadra: "D.O.C. Seriana Cobras", punti: 3, giocate: 1, vinte: 1, perse: 0, puntiFatti: 65, puntiSubiti: 54, diff: 11 },
  { posizione: 3, squadra: "Fervens Vertova", punti: 3, giocate: 1, vinte: 1, perse: 0, puntiFatti: 64, puntiSubiti: 62, diff: 2 },
  { posizione: 4, squadra: "Pro.Bas Gorlago", punti: 0, giocate: 0, vinte: 0, perse: 0, puntiFatti: 0, puntiSubiti: 0, diff: 0 },
  { posizione: 5, squadra: "69ers Grumello", punti: 0, giocate: 0, vinte: 0, perse: 0, puntiFatti: 0, puntiSubiti: 0, diff: 0 },
  { posizione: 6, squadra: "Potascè Basket", punti: 0, giocate: 0, vinte: 0, perse: 0, puntiFatti: 0, puntiSubiti: 0, diff: 0 },
  { posizione: 7, squadra: "Pol. Vall'Alta", punti: 0, giocate: 0, vinte: 0, perse: 0, puntiFatti: 0, puntiSubiti: 0, diff: 0},
  { posizione: 8, squadra: "Fiore Outlanders", punti: 0, giocate: 0, vinte: 0, perse: 0, puntiFatti: 0, puntiSubiti: 0, diff: 0 },
  { posizione: 9, squadra: "Colognola 46ers", punti: 0, giocate: 0, vinte: 0, perse: 0, puntiFatti: 0, puntiSubiti: 0, diff: 0 },
  { posizione: 10, squadra: "Sebino Basket", punti: 0, giocate: 1, vinte: 0, perse: 1, puntiFatti: 62, puntiSubiti: 64, diff: -2 },
  { posizione: 11, squadra: "Pol. Bees Madignano", punti: 0, giocate: 1, vinte: 0, perse: 1, puntiFatti: 54, puntiSubiti: 65, diff: -11 },
  { posizione: 11, squadra: "Colognola Fly", punti: 0, giocate: 1, vinte: 0, perse: 1, puntiFatti: 62, puntiSubiti: 78, diff: -16 }
];

const Campionato = () => {

  // Funzione che ritorna "vittoria", "sconfitta" o "" per ciascun match dei Seriana Cobras
  const getRisultatoCobras = (match) => {
    if (match.puntiCasa === "--" || match.puntiOspite === "--") return "";

    const puntiCobras = match.casa === "D.O.C. Seriana Cobras" ? match.puntiCasa : match.puntiOspite;
    const puntiAvversario = match.casa === "D.O.C. Seriana Cobras" ? match.puntiOspite : match.puntiCasa;

    return puntiCobras > puntiAvversario ? "vittoria" : "sconfitta";
  };

  return (
    <div className="campionato-container">
      <h1 className="titolo-classifica">Classifica</h1>
      <table className="classifica-tabella">
        <thead>
          <tr>
            <th>#</th>
            <th>Squadra</th>
            <th>Pt</th>
            <th>Pg</th>
            <th>V</th>
            <th>S</th>
            <th>PF</th>
            <th>PS</th>
            <th>Diff</th>
          </tr>
        </thead>
        <tbody>
          {classifica.map((team) => (
            <tr
              key={team.posizione}
              className={team.squadra === "D.O.C. Seriana Cobras" ? "highlight-cobras" : ""}
            >
              <td>{team.posizione}</td>
              <td>{team.squadra}</td>
              <td>{team.punti}</td>
              <td>{team.giocate}</td>
              <td>{team.vinte}</td>
              <td>{team.perse}</td>
              <td>{team.puntiFatti}</td>
              <td>{team.puntiSubiti}</td>
              <td>{team.diff}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="titolo-risultati">Risultati</h2>
      <table className="risultati-tabella">
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Ora</th>
            <th>Casa</th>
            <th>PC</th>
            <th>PO</th>
            <th>Ospite</th>
          </tr>
        </thead>
        <tbody>
          {risultati.map((match) => {
            const classeRisultato = 
              match.casa === "D.O.C. Seriana Cobras" || match.ospite === "D.O.C. Seriana Cobras" 
                ? getRisultatoCobras(match)
                : "";

            return (
              <tr key={match.numero} className={classeRisultato}>
                <td>{match.numero}</td>
                <td>{match.data}</td>
                <td>{match.ora}</td>
                <td>{match.casa}</td>
                <td>{match.puntiCasa}</td>
                <td>{match.puntiOspite}</td>
                <td>{match.ospite}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Campionato