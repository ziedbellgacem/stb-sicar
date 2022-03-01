import React from "react";
import "./SectionThree.css";

function SectionThree() {
  return (
    <div className="sectionThree">
      <h3>Principes d’investissement</h3>
      <div className="sectionThreeCont">
        <div className="setionThreeContp1">
          <p>
            Investir
            <br /> dans des projets viables
          </p>
        </div>
        <div className="setionThreeContp2">
          <p>
            Investir
            <br /> dans l’equity ou quasi equity
          </p>
        </div>
        <div className="setionThreeContp3">
          <p>
            Investir <br /> minoritairement
          </p>
        </div>
        <div className="setionThreeContp4">
          <p>
            Investir
            <br /> en respect des ratios règlementaires
          </p>
        </div>
      </div>
      <div className="sectionThreeCont2">
        <img src="/images/investi.png" alt="" width="1000" height="500" />
        <div className="sectionThreeCont2det">
          <h3>Modes d’intervention</h3>
          <p>
            Les actions ordinaires (A.O) en sortie libre .<br />
            Les obligations convertibles en actions (O.C.A) .<br />
            Les avances sous forme de compte courant associé (C.C.A)
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
