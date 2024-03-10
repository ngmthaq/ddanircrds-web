import React, { useState } from "react";
import { Form } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";
import { AddCircle, Send } from "@mui/icons-material";
import {
  BoxFlexCenter,
  BoxFlexEnd,
  FormContainer,
  FormHeadingContainer,
  HomePageMainButton,
  HomePageSectionTitle,
} from "./HomePage.styled";
import { CommonUtils } from "@/common/utils";
import { customPaleteColor } from "@/theme/material";

export const HomePageForm = () => {
  const [moreMusicNumber, setMoreMusicNumber] = useState<number>(1);

  const handleAddMoreMusic = () => {
    setMoreMusicNumber(moreMusicNumber + 1);
  };

  return (
    <FormContainer id="form">
      <Container maxWidth="md">
        <HomePageSectionTitle>Join Us</HomePageSectionTitle>
        <FormHeadingContainer>
          <HomePageMainButton variant="contained">Music Submissions</HomePageMainButton>
          <a
            href={`mailto:${process.env.REACT_APP_EMAIL_CONTACT}`}
            target="_blank"
            rel="noreferrer"
          >
            <HomePageMainButton variant="outlined">Licensing Request</HomePageMainButton>
          </a>
        </FormHeadingContainer>
        <Form>
          <TextField margin="normal" label="Name" variant="outlined" fullWidth />
          <TextField margin="normal" label="Email" variant="outlined" fullWidth />
          <TextField margin="normal" label="Instagram" variant="outlined" fullWidth />
          <TextField margin="normal" label="Spotify" variant="outlined" fullWidth />
          {CommonUtils.arrayFromNumber(moreMusicNumber).map((index) => (
            <TextField
              key={index}
              margin="normal"
              label="Link to More Music"
              variant="outlined"
              fullWidth
            />
          ))}
          <BoxFlexEnd>
            <Button
              endIcon={<AddCircle />}
              onClick={handleAddMoreMusic}
              sx={{ color: customPaleteColor.main }}
            >
              Add more
            </Button>
          </BoxFlexEnd>
          <TextField
            margin="normal"
            label="Info"
            variant="outlined"
            fullWidth
            multiline
            maxRows={6}
            inputProps={{ rows: 6, style: { height: "unset", overflow: "visible" } }}
          />
          <BoxFlexCenter sx={{ marginTop: "16px" }}>
            <HomePageMainButton variant="contained" size="large" startIcon={<Send />}>
              Send
            </HomePageMainButton>
          </BoxFlexCenter>
        </Form>
      </Container>
    </FormContainer>
  );
};
