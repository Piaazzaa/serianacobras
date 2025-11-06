import React from "react";
import players from "../Arrays/Players";
import "./Roster.css";

export default function Roster() {
  // Raggruppa i giocatori per ruolo
  const groupedPlayers = players.reduce((acc, player) => {
    if (!acc[player.position]) acc[player.position] = [];
    acc[player.position].push(player);
    return acc;
  }, {});

  return (
    <div className="roster-container">
      <h1 className="roster-title">Squadra 2025/2026</h1>

      {Object.entries(groupedPlayers).map(([position, group]) => (
        <div key={position} className="role-section">
          <h2 className="role-title">{position}</h2>
          <div className="players-row">
            {group.map((player) => (
              <div key={player.name} className="player-card">
                <img
                  src={player.photo}
                  alt={player.name}
                  className="player-photo"
                />
                <div className="player-info">
                  <div className="player-number">#{player.number}</div>
                  <div className="player-name">{player.name} {player.surname}</div>
                  <div className="player-role">{player.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}