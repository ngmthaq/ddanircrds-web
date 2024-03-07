import React, { Fragment, useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { HomePageContext } from "./HomePage.context";
import {
  SliderContainer,
  SliderContainerBackdrop,
  SliderContainerBottomBackdrop,
  SliderItem,
  SliderText,
} from "./HomePage.styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HomePageBanner = () => {
  const { banners } = useContext(HomePageContext);

  return (
    <Fragment>
      <SliderContainer>
        <SliderContainerBackdrop />
        <SliderContainerBottomBackdrop />
        <Carousel
          autoPlay={true}
          showIndicators={true}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          dynamicHeight={false}
          autoFocus={false}
          stopOnHover={false}
          showStatus={false}
          swipeable={false}
          emulateTouch={false}
          useKeyboardArrows={false}
          interval={5000}
        >
          {banners.map((banner) => (
            <SliderItem src={banner.publicUrl} alt={banner.url} key={banner.id} />
          ))}
        </Carousel>
      </SliderContainer>
      <SliderText>Distribute your music to all major music and streaming platforms.</SliderText>
    </Fragment>
  );
};
