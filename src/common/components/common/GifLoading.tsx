import React, { FC } from "react";
import { TransitionGroup } from "react-transition-group";
import { Box, Fade, styled } from "@mui/material";
import LaunchingRockerGif from "@/theme/images/loading.gif";

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

const Wrapper = styled(Box)(() => ({
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  overflow: "hidden",
}));

export const GifLoading: FC = () => {
  return (
    <TransitionGroup>
      <Fade>
        <Container>
          <Wrapper>
            <img
              width={"100%"}
              height={"100%"}
              alt="loading.gif"
              src={LaunchingRockerGif}
              style={{ objectFit: "cover" }}
            />
          </Wrapper>
        </Container>
      </Fade>
    </TransitionGroup>
  );
};
