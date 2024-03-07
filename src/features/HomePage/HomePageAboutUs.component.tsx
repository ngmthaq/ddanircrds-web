import React, { useContext } from "react";
import { Container } from "@mui/material";
import logo from "@/theme/assets/logo-app-4x.png";
import { HomePageContext } from "./HomePage.context";
import {
  AboutUsContainer,
  AboutUsContent,
  AboutUsLogo,
  AboutUsWrapper,
  HomePageSectionTitle,
} from "./HomePage.styled";

export const HomePageAboutUs = () => {
  const { aboutUs } = useContext(HomePageContext);

  return (
    <AboutUsContainer id="about-us">
      <Container>
        <HomePageSectionTitle>About DDani RCRDS</HomePageSectionTitle>
        <AboutUsWrapper>
          <AboutUsContent>{aboutUs.content}</AboutUsContent>
          <AboutUsLogo>
            <img src={logo} alt="logo" />
          </AboutUsLogo>
        </AboutUsWrapper>
      </Container>
    </AboutUsContainer>
  );
};
