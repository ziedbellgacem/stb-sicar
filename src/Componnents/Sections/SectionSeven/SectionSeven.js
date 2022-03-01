import React from "react";
import "./SectionSeven.css";
import { useNavigate } from "react-router-dom";

function SectionSeven() {
  const navigate = useNavigate();
  return (
    <div className="sectionSeven">
      <h1>NOS FONDS</h1>
      <div className="sectionSevenCont">
        <div className="sectionSevenContTitle">
          <h3>1- Nos investisseurs</h3>
          <p>
            STB SICAR dispose de fonds apportés par des investisseurs
            institutionnels de premier plan.
          </p>
        </div>
        <img src="/images/inve1.png" alt="" width="600" />
      </div>
      <div className="images">
        <img src="/images/invi2.jpg" alt="" width="300" />
        <img src="/images/invi3.png" alt="" width="300" />
        <img src="/images/invi4.png" alt="" width="300" />
      </div>

      <div className="sectionSevenContTitle2">
        <h3>2- Optimisez votre fiscalite</h3>
        <p>
          Les investisseurs qui désirent optimiser leur fiscalité peuvent
          confier tout ou partie de leurs bénéfices imposables à la STB SICAR
          sous forme de fonds géré. La règlementation en vigueur leur permet
          d’opter pour l’un des schémas suivants :
        </p>
      </div>
      <h4>Deux alternatives</h4>
      <div className="sectionSevenFond">
        <div className="cont1">
          <p>100% des revenus ou bénéfices imposables sans minimum d'impôt</p>
          <div className="cont11">
            <p>
              Déduction totale sur la base d'un engagement de la STB SICAR
              d’employer 75% de montant déposés dans des ZDR ou agricole.
            </p>
          </div>
        </div>
        <div className="cont2">
          <p>35% des revenus ou bénéfices imposables avec minimum d'impôt</p>
          <div className="cont22">
            <p>
              Déduction des revenus ou bénéfices réinvestis auprès de la STB
              SICAR , sur la base d’un engagement d’emploi de 65% dans des
              projets définis par la règlementation*
            </p>
          </div>
        </div>
      </div>
      <h6 onClick={() => navigate("/details")}>voir détails</h6>
    </div>
  );
}

export default SectionSeven;
