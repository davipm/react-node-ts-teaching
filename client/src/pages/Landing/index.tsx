import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

import {
  Button,
  ButtonsContainer,
  Container,
  HeroImage,
  LandingContainer,
  LogoContainer,
  TotalConnections,
} from "./styles";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("/connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <Container>
      <LandingContainer>
        <LogoContainer>
          <img src={logo} alt="Proffy" />
          <h2>Your online study platform.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Study platform" />

        <ButtonsContainer>
          <Button as={Link} to="/study" variant="study">
            <img src={studyIcon} alt="To study" />
            To study
          </Button>

          <Button as={Link} to="/give-classes" variant="classes">
            <img src={giveClassesIcon} alt="Give classes" />
            Give classes
          </Button>
        </ButtonsContainer>

        <TotalConnections>
          Total of {totalConnections} connections already made
          <img src={purpleHeartIcon} alt="Purple heart" />
        </TotalConnections>
      </LandingContainer>
    </Container>
  );
}

export default Landing;
