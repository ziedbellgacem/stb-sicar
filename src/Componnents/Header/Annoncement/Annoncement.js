import React from "react";
import "./Annoncement.css";

function Annoncement() {
  return (
    <div className="annoucement">
      <div className="annCont">
        <div className="annConHed">
          <i class="fa fa-map-marker"></i>
          <p>
            Siège social, Imm. El Emtiez.
            <br /> Centre Urbain Nord, 1003, Tunis.
          </p>
        </div>
        <div className="annConHed">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <p>
            +216 71 238 729
            <br /> +216 71 233 342
          </p>
        </div>
        <div className="annConHed">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <p>info@stbsicar.com.tn</p>
        </div>
      </div>
    </div>
  );
}

export default Annoncement;
