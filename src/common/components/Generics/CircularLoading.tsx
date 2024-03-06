import React, { FC } from "react";
import { TransitionGroup } from "react-transition-group";
import { Box, CircularProgress, Fade, styled } from "@mui/material";

export const CircularLoading: FC = () => {
  return (
    <TransitionGroup>
      <Fade>
        <Container>
          <Wrapper>
            <CircularProgress size={40} />
          </Wrapper>
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
  zIndex: theme.zIndex.tooltip,
  background: "rgba(0, 0, 0, 0.1)",
}));

const Wrapper = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: theme.zIndex.tooltip,
  background: "#fff",
  borderRadius: "4px",
}));
