import React from 'react'
import docLogo from "../../Graphics/Sponsor/DOC.jpg"
import moioliLogo from "../../Graphics/Sponsor/PREFABBRICATI-MOIOLI.jpg"
import pottoLogo from "../../Graphics/Sponsor/DJ-Potto.jpg"
import performance365Logo from "../../Graphics/Sponsor/PERFORMANCE365.jpg"
import './Sponsor.css'

const sponsors = [
  {
    name: "D.o.c. pizzeria",
    logo: docLogo,
    link: "https://docpizzeriaalbino.it",
  },
  {
    name: "prefabbricati Moioli",
    logo: moioliLogo,
    link: "https://prefabbricatimoioli.it",
  },
  {
    name: "Djpotto",
    logo: pottoLogo,
    link: "https://www.instagram.com/_djpotto_/",
  },
  {
    name: "Performance365",
    logo: performance365Logo,
    link: "https://www.performance365.it",
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-container">
      <h1 className="sponsor-title">I Nostri Sponsor</h1>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="sponsor-logo"
            />
            <p className="sponsor-name">{sponsor.name}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Sponsor