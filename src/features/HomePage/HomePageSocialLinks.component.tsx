import React, { useContext } from "react";
import Slider, { type Settings } from "react-slick";
import { Container } from "@mui/material";
import { HomePageContext } from "./HomePage.context";
import { SocialSliderContainer, SocialSliderItem } from "./HomePage.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HomePageSocialLinks = () => {
  const { socials } = useContext(HomePageContext);

  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SocialSliderContainer>
      <Container>
        <Slider {...settings}>
          {socials.map((social) => (
            <SocialSliderItem
              key={social.id}
              href={social.isOpen ? social.profile : "javascript:void(0)"}
              target={social.isOpen ? "_blank" : "_self"}
              title={
                social.isOpen
                  ? `Follow us in ${social.name}`
                  : "We are planning to join this platform. Follow us in another platforms to receive the latest information."
              }
            >
              <img src={social.logo} alt={social.name} />
            </SocialSliderItem>
          ))}
        </Slider>
      </Container>
    </SocialSliderContainer>
  );
};
