import React from "react";
import { Container } from "@mui/material";
import {
  FormContainer,
  FormHeadingContainer,
  HomePageMainButton,
  HomePageSectionTitle,
} from "./HomePage.styled";

export const HomePageForm = () => {
  return (
    <FormContainer>
      <Container>
        <HomePageSectionTitle>Join Us</HomePageSectionTitle>
        <FormHeadingContainer>
          <HomePageMainButton variant="contained">Music Submissions</HomePageMainButton>
          <HomePageMainButton variant="outlined">Licensing Request</HomePageMainButton>
        </FormHeadingContainer>
      </Container>
    </FormContainer>
  );
};
