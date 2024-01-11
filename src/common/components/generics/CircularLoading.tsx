import React, { FC } from "react";
import { TransitionGroup } from "react-transition-group";
import { Box, CircularProgress, Fade, styled } from "@mui/material";

export const CircularLoading: FC = () => {
  return (
    <TransitionGroup>
      <Fade>
        <Container>
          <CircularProgress size={40} />
        </Container>
      </Fade>
    </TransitionGroup>
  );
};

const Container = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: theme.zIndex.modal,
}));
