import React from "react";
import { useNavigate } from "react-router-dom";
import "./SectionTwo.css";

function SectionTwo() {
  const navigate = useNavigate();
  return (
    <div className="sectionTwo">
      <h1>NOUS CONNAITRE</h1>
      <div className="sectionTwoPres">
        <h2 className="p1">
          La<span> STB SICAR</span>, filiale de la <span>STB BANK</span> ,{" "}
          <br />a été créée le 23 mars 1998.
        </h2>
        <p className="p2">
          {" "}
          C'est une société d’investissement à capital risque qui a pour
          objectif la participation,
          <br /> pour son propre compte ou pour le compte de bailleurs de fonds
          au renforcement
          <br />
          des opportunités d’investissement et des fonds propres des
          entreprises.
          <br /> Elle permet de procurer aux entreprises les fonds nécessaires à
          leur développement
          <br /> et à leur croissance avec obligation de sortie.
        </p>
      </div>
      <div className="chifreCle">
        <div>
          <h4>23</h4>
          <h5>ans D’expérience </h5>
        </div>
        <div>
          <h4>128</h4>
          <h5>MDT Sous gestion</h5>
        </div>
        <div>
          <h4>300</h4>
          <h5>Investissements en portefeuille</h5>
        </div>
        <div>
          <h4>58</h4>
          <h5>Sorties intégrales réalisées</h5>
        </div>
        <div>
          <h4>91</h4>
          <h5>Sorties intégrales réalisées</h5>
        </div>
        <div>
          <h4>24</h4>
          <h5>Sorties intégrales réalisées</h5>
        </div>
        <div>
          <h4>1750</h4>
          <h5>emplos créés durant les 5 dernières années</h5>
        </div>
      </div>
      <div className="sectionTwoImg">
        <img
          src="/images/buss4.png"
          alt=""
          className="sectionTwoImgCenter"
          width="1300"
          height="600"
        />
        <div className="sectionTwoTrailer">
          <i
            className="fa fa-play-circle"
            aria-hidden="true"
            onClick={() => navigate("/intro")}
          ></i>
          <h3>Intro Video</h3>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
