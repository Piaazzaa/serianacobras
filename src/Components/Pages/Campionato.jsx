import React from "react";
import './Campionato.css';

const risultati = [
  { numero: 1, data: "17/10/2025", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: 89, puntiOspite: 47, ospite: "Vall'Alta" },
  { numero: 2, data: "23/10/2025", ora: "21:30", casa: "Scanzorosciate", puntiCasa: 61, puntiOspite: 59, ospite: "D.O.C. Seriana Cobras" },
  { numero: 3, data: "31/10/2025", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: 69, puntiOspite: 74, ospite: "Aspo Pontoglio" },
  { numero: 4, data: "07/11/2025", ora: "21:30", casa: "Colognola 46ers", puntiCasa: 50, puntiOspite: 58, ospite: "D.O.C. Seriana Cobras" },
  { numero: 5, data: "14/11/2025", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Potascè Baket" },
  { numero: 6, data: "20/11/2025", ora: "21:15", casa: "Pol. Villese", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 7, data: "27/11/2025", ora: "21:15", casa: "69ers Grumello", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 8, data: "05/12/2025", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Fervens Vertova" },
  { numero: 9, data: "11/12/2025", ora: "21:30", casa: "Boca Lions 89", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 10, data: "19/12/2025", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Sebino Basket" },
  { numero: 11, data: "Riposo", ora: "Riposo", casa: "Riposo", puntiCasa: "Riposo", puntiOspite: "Riposo", ospite: "Riposo" },
  { numero: 12, data: "30/01/2026", ora: "21:30", casa: "Vall'Alta", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 13, data: "06/02/2026", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Scanzorosciate" },
  { numero: 14, data: "13/02/2026", ora: "20:45", casa: "Aspo Pontoglio", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 15, data: "20/02/2026", ora: "20:45", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Colognola 46ers" },
  { numero: 16, data: "27/02/2026", ora: "21:15", casa: "Potascè Baket", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 17, data: "06/03/2026", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Pol. Villese" },
  { numero: 18, data: "13/03/2026", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "69ers Grumello" },
  { numero: 19, data: "19/03/2026", ora: "21:00", casa: "Fervens Vertova", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 20, data: "27/03/2026", ora: "20:30", casa: "D.O.C. Seriana Cobras", puntiCasa: "--", puntiOspite: "--", ospite: "Boca Lions 89" },
  { numero: 21, data: "08/04/2026", ora: "21:30", casa: "Sebino Basket", puntiCasa: "--", puntiOspite: "--", ospite: "D.O.C. Seriana Cobras" },
  { numero: 22, data: "Riposo", ora: "Riposo", casa: "Riposo", puntiCasa: "Riposo", puntiOspite: "Riposo", ospite: "Riposo" },
];

const classifica = [
  { posizione: 1, squadra: "Pol. Villese", punti: 12, giocate: 4, vinte: 4, perse: 0, puntiFatti: 239, puntiSubiti: 172, diff: 67 },
  { posizione: 2, squadra: "Aspo Pontoglio", punti: 12, giocate: 4, vinte: 4, perse: 0, puntiFatti: 250, puntiSubiti: 212, diff: 38 },
  { posizione: 3, squadra: "Scanzorosciate", punti: 9, giocate: 4, vinte: 3, perse: 1, puntiFatti: 249, puntiSubiti: 244, diff: 5 },
  { posizione: 4, squadra: "D.O.C. Seriana Cobras", punti: 6, giocate: 4, vinte: 2, perse: 2, puntiFatti: 275, puntiSubiti: 232, diff: 43},
  { posizione: 5, squadra: "Sebino Basket", punti: 6, giocate: 4, vinte: 2, perse: 2, puntiFatti: 244, puntiSubiti: 218, diff: 26 },
  { posizione: 6, squadra: "Fervens Vertova", punti: 6, giocate: 3, vinte: 2, perse: 1, puntiFatti: 202, puntiSubiti: 194, diff: 8 },
  { posizione: 7, squadra: "69ers Grumello", punti: 6, giocate: 3, vinte: 2, perse: 1, puntiFatti: 167, puntiSubiti: 161, diff: 6 },
  { posizione: 8, squadra: "Vall'Alta", punti: 3, giocate: 5, vinte: 1, perse: 4, puntiFatti: 270, puntiSubiti: 314, diff: -44 },
  { posizione: 9, squadra: "Potascè Baket", punti: 0, giocate: 3, vinte: 0, perse: 3, puntiFatti: 154, puntiSubiti: 184, diff: -30 },
  { posizione: 10, squadra: "Colognola 46ers", punti: 0, giocate: 3, vinte: 0, perse: 3, puntiFatti: 133, puntiSubiti: 174, diff: -41 },
  { posizione: 11, squadra: "Boca Lions 89", punti: 0, giocate: 3, vinte: 0, perse: 3, puntiFatti: 107, puntiSubiti: 185, diff: -78 }
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