import React from "react";
import aboutFoto from "../../Graphics/FotoAbout/AboutUs.jpeg"
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src={aboutFoto} alt="Seriana Cobras Team" className="about-image" />
        </div>
        <div className="about-text">
          <h1 className="about-title">Seriana Cobras 🐍</h1>
          <p>
            In principio si trattava di una semplice chiacchierata tra amici,
            come quelle che si fanno in un parco su una panchina dopo una giornata di scuola.
          </p>
          <p>
            Col tempo è nato un sogno: riunire vecchi e nuovi compagni di pallacanestro
            in modo da creare una vera e propria squadra di basket.
          </p>
          <p>
            Grazie anche al sostegno di altre persone al di fuori del team
            questa idea ha iniziato a prendere forma e dopo un lungo periodo
            siamo arrivati finalmente a concretizzare il tutto.
          </p>
          <p>
            D.O.C. Seriana 'Cobras' è il nostro nome.
            Condividiamo la passione per questo sport fin da quando siamo piccoli.
            Ora abbiamo l'occasione di cominciare un nuovo percorso tutti insieme.
          </p>
          <p>
            Non si tratta solo di vincere partite.
            Quello che spinge ognuno di noi a dare il meglio di sé è l'ambiente che si è creato attorno.
            È nata una nuova famiglia e non vediamo l'ora di crescere assieme e ottenere grandi soddisfazioni. 
          </p>
          <p>
            💜 <em>“Seriana Cobras — non solo una squadra, ma una famiglia.”</em> 🖤
          </p>
        </div>
      </div>
    </div>
  );
}