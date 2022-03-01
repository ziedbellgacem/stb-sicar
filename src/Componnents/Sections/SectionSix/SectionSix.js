import React from "react";
import { useNavigate } from "react-router-dom";
import "./SectionSix.css";
function SectionSix() {
  const navigate = useNavigate();
  return (
    <div className="sectionSix">
      <div className="sectionSixCont">
        <h1>Contribution ODD</h1>
        <div className="map">
          <p>
            La STB SICAR contribue aux objectifs de développement durable
            proportionnellement aux moyens dont elle dispose. <br />
            Au regard de ses activités, elle contribue principalement aux 7 ODD
            suivants :
          </p>
          <img src="/images/map.png" alt="" />
        </div>
        <div className="sectionSixContOdd">
          <div>
            <img
              src="/images/odd4.png"
              alt=""
              width="500"
              onClick={() => navigate("/odd4")}
            />
          </div>
          <div>
            <img
              src="/images/odd5.png"
              alt=""
              width="500"
              onClick={() => navigate("/odd5")}
            />
          </div>
          <div>
            <img
              src="/images/odd7.png"
              alt=""
              width="500"
              onClick={() => navigate("/odd7")}
            />
          </div>
          <div>
            <img
              src="/images/odd8.png"
              alt=""
              width="500"
              onClick={() => navigate("/odd8")}
            />
          </div>
          <div>
            <img
              src="/images/odd9.png"
              alt=""
              width="500"
              onClick={() => navigate("/odd9")}
            />
          </div>
          <div>
            <img
              src="/images/odd12.png"
              alt=""
              width="500"
              onClick={() => navigate("/odd12")}
            />
          </div>
          <div className="odd16">
            <img
              src="/images/odd16.png"
              alt=""
              width="500"
              onClick={() => navigate("/odd16")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
