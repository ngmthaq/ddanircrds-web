import React, { ChangeEvent, DOMAttributes, useState } from "react";
import { useSubmit } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";
import { AddCircle, Send } from "@mui/icons-material";
import { customPaleteColor } from "@/theme/material";
import { AppUtils, CommonUtils } from "@/common/utils";
import {
  BoxFlexCenter,
  BoxFlexEnd,
  FormContainer,
  FormHeadingContainer,
  HomePageMainButton,
  HomePageSectionTitle,
} from "./HomePage.styled";
import { MusicSubmissionPayload } from "./HomePage.context";

export const HomePageForm = () => {
  const submit = useSubmit();

  const [payload, setPayload] = useState<MusicSubmissionPayload>({
    name: "",
    email: "",
    spotify: "",
    instagram: "",
    info: "",
    musics: [""],
  });

  const handleAddMoreMusic = () => {
    setPayload((currentState) => ({ ...currentState, musics: [...currentState.musics, ""] }));
  };

  const handleChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    setPayload((currentState) => ({
      ...currentState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeMusicSubmission = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const newMusicValues = payload.musics.map((music, currentIndex) => {
      if (index === currentIndex) return event.target.value;
      return music;
    });

    setPayload((currentState) => ({
      ...currentState,
      musics: newMusicValues,
    }));
  };

  const handleSubmit: DOMAttributes<HTMLFormElement>["onSubmit"] = (event) => {
    event.preventDefault();

    let isMusicUrlValid = true;
    payload.musics
      .filter((music) => Boolean(music.trim()))
      .forEach((music) => {
        if (!CommonUtils.isValidUrl(music)) {
          isMusicUrlValid = false;
        }
      });

    if (!CommonUtils.isValidUrl(payload.spotify)) {
      AppUtils.openSnackbar({ message: "Spotify URL is not valid", variant: "error" });
    } else if (!CommonUtils.isValidUrl(payload.instagram)) {
      AppUtils.openSnackbar({ message: "Instagram URL is not valid", variant: "error" });
    } else if (!isMusicUrlValid) {
      AppUtils.openSnackbar({ message: "Link to More Music is not valid", variant: "error" });
    } else {
      submit(JSON.stringify(payload), {
        method: "post",
        encType: "application/json",
      });
    }
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
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            type="text"
            name="name"
            label="Name"
            variant="outlined"
            onChange={handleChangeForm}
            required
            fullWidth
          />
          <TextField
            margin="normal"
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={handleChangeForm}
            required
            fullWidth
          />
          <TextField
            margin="normal"
            type="text"
            name="spotify"
            label="Spotify"
            variant="outlined"
            onChange={handleChangeForm}
            required
            fullWidth
          />
          <TextField
            margin="normal"
            type="text"
            name="instagram"
            label="Instagram"
            variant="outlined"
            onChange={handleChangeForm}
            required
            fullWidth
          />
          {payload.musics.map((url, index) => (
            <TextField
              key={index}
              margin="normal"
              type="text"
              label="Link to More Music"
              variant="outlined"
              value={url}
              onChange={(event) => handleChangeMusicSubmission(event, index)}
              required={index === 0}
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
            type="text"
            label="Info"
            variant="outlined"
            onChange={handleChangeForm}
            name="info"
            fullWidth
            multiline
            required
            maxRows={6}
            inputProps={{ rows: 6, style: { height: "unset", overflow: "visible" } }}
          />
          <BoxFlexCenter sx={{ marginTop: "16px" }}>
            <HomePageMainButton type="submit" variant="contained" size="large" startIcon={<Send />}>
              Send
            </HomePageMainButton>
          </BoxFlexCenter>
        </form>
      </Container>
    </FormContainer>
  );
};
