import React from "react";
import "./SectionFour.css";
import { Card } from "react-bootstrap";

function SectionFour() {
  return (
    <div className="sectionFour">
      <div className="sectionFourTitle">
        <h1>UN ÉTAT D'ESPRIT</h1>
        <h3>
          Nous plaçons la confiance comme valeur fondamentale d’un partenariat
          gagnant
        </h3>
      </div>
      <div className="listCard">
        <Card
          style={{
            width: "20rem",

            backgroundColor: "#ADD8E6",
          }}
        >
          <img src="/images/accomp.png" width="130px" height="130px" alt="" />
          <Card.Body>
            <Card.Title>Un Accompagnement</Card.Title>
            <Card.Text style={{ color: "#777" }}>Plus de détails </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "20rem",

            backgroundColor: "#FFB6C1",
          }}
        >
          <img
            src="/images/les valeur.png"
            width="130px"
            height="130px"
            alt=""
          />
          <Card.Body>
            <Card.Title>Les valeurs qui se partagent</Card.Title>
            <Card.Text style={{ color: "#777" }}>Plus de détails</Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "20rem",

            backgroundColor: "#9370DB",
          }}
        >
          <img src="/images/avrnture.png" width="130px" height="130px" alt="" />
          <Card.Body>
            <Card.Title>Une aventure Humaine</Card.Title>
            <Card.Text style={{ color: "#777" }}>Plus de détails</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="valeur">
        <h3>Notre valeur ajoutée</h3>
        <p>
          L’accompagnement des participations est une pierre angulaire du
          positionnement de la <span className="stb">STB SICAR</span> et un
          marqueur fort de sa stratégie. Notre expérience montre qu’en apportant
          des ressources et des compétences complémentaires à celles des équipes
          dirigeantes, nous pouvons contribuer significativement à la création
          de valeur stratégique de l’entreprise, tant sur le plan économique que
          social.
        </p>
      </div>
    </div>
  );
}

export default SectionFour;
