import React from "react";
import "./SectionFive.css";

function SectionFive() {
  return (
    <div className="sectionFive">
      <h1>RESPONSABILITE SOCIALE</h1>
      <div className="sectionFiveNotre1">
        <div className="sectionFiveNotre1cont">
          <h3>1- Notre politique interne</h3>
          <p>
            Nous permettons à nos collaborateurs de grandir au sein de STB
            SICAR, aussi bien professionnellement que personnellement. Nous
            veillons à l’égalité entre tous et à l’accomplissement de chacun.
          </p>
        </div>
        <h3 style={{ marginTop: "365px" }}>En Bref</h3>
      </div>

      <div className="notres">
        <div className="notre1">
          <h5>Renforcer nos engagements pour l’égalité femmes-hommes</h5>
        </div>
        <div className="notre2">
          <h5>
            Accompagner nos collaborateurs pour faire évoluer leurs compétences
          </h5>
        </div>
        <div className="notre3">
          <h5>
            Offrir à nos collaborateurs une qualité de vie au travail optimale
          </h5>
        </div>
      </div>
      <div className="sectionFiveNotre1">
        <div className="sectionFiveNotre1cont2">
          <h3>2- Pour nos participations</h3>
          <p>
            Nous sommes conscients de la nécessité de prendre en considération
            les critères environnementaux, sociaux et de qualité de gouvernance
            (ESG) dans la politique d’investissement. Ainsi, nous avons établi
            une charte ESG. Nous sommes également très attachés à la qualité de
            l’approche et à la politique mise en œuvre par nos participations en
            ce qui concerne le respect de l’environnement et la gestion des
            ressources humaines. Pour ce faire, un questionnaire a été envoyé
            aux sociétés financées. Il s’appuie sur un socle commun comprenant
            des indicateurs quantitatifs portant sur les 3 grands thèmes ESG
            prioritaires de la STB SICAR.
          </p>
        </div>
      </div>

      <div className="notres1">
        <div className="notre11">
          <h5>Gouvernance</h5>
        </div>
        <div className="notre22">
          <h5>Volet social</h5>
        </div>
        <div className="notre33">
          <h5>Environnement</h5>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
