import React from "react";
import Contact from "./Contact/Contact";
import SectionFive from "./SectionFive/SectionFive";
import SectionFour from "./SectionFour/SectionFour";
import SectionOne from "./SectionOne/SectionOne";
import SectionSeven from "./SectionSeven/SectionSeven";
import SectionSix from "./SectionSix/SectionSix";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";

function Sections() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Contact />
    </div>
  );
}

export default Sections;
