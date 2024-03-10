import React, { useContext } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "@/theme/assets/logo-app-4x.png";
import { HomePageContext } from "./HomePage.context";
import { FooterContainer } from "./HomePage.styled";

export const HomePageFooter = () => {
  const { socials } = useContext(HomePageContext);

  return (
    <FooterContainer>
      <Container sx={{ padding: "32px 0 40px" }}>
        <Grid container sx={{ padding: "0 16px" }}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box>
              <img src={logo} alt="logo" style={{ width: "100px", height: "auto" }} />
              <Typography sx={{ color: "#fff", marginBottom: "32px" }}>
                Build your artist career on your own terms.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box>
              <Typography sx={{ color: "#fff", marginBottom: "16px" }}>Find us</Typography>
              <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                {socials.map((social) => (
                  <Box
                    component="a"
                    href={social.isOpen ? social.profile : "#"}
                    target="_blank"
                    key={social.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flex: "0 0 33.333333%",
                      marginBottom: "16px",
                    }}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      style={{
                        width: "20px",
                        height: "20px",
                        objectFit: "contain",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ color: "#fff" }}>{social.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography sx={{ color: "#fff", textAlign: "center" }}>
        © DDani RCRDS {new Date().getFullYear()} <br />
        Designed by @kentlee.design
      </Typography>
    </FooterContainer>
  );
};
