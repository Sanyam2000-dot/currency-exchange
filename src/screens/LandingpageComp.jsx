import React from "react";
import NavbarComp from "../components/NavbarComp";
import { FooterComp } from "../components/FooterComp";
import { Heading } from "@chakra-ui/react";

const LandingpageComp = () => {
  return (
    <div>
      <NavbarComp />
      <div style={{ margin: "3rem 5rem" }}>
        <Heading align={"center"}>
          Log In Exchange your Currency in Seconds!
        </Heading>

        <img
          width={"500px"}
          height={"400px"}
          style={{ margin: "auto", paddingTop: "0.5rem" }}
          src="/landinghero.png"
          alt=""
        />
      </div>

      <FooterComp />
    </div>
  );
};

export default LandingpageComp;
