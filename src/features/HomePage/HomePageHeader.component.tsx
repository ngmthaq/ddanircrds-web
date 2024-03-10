import React, { Fragment, useState } from "react";
import { Menu } from "@mui/icons-material";
import { useResponsive } from "@/common/hooks";
import logo from "@/theme/assets/logo-app-4x.png";
import { HomePageHeaderDrawer } from "./HomePageHeaderDrawer.component";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNavContainer,
  HeaderWrapper,
  MobileHeaderContainer,
  MobileHeaderMenu,
  MobileHeaderLogo,
} from "./HomePage.styled";

export const HomePageHeader = () => {
  const { isDesktop } = useResponsive();

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setIsOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
  };

  return isDesktop ? (
    <HeaderContainer component="header">
      <HeaderWrapper maxWidth="lg">
        <HeaderNavContainer>
          <a href="#" className="disabled" title={navTitle}>
            Artist
          </a>
          <a href="#" className="disabled" title={navTitle}>
            Release
          </a>
        </HeaderNavContainer>
        <HeaderLogo href="#">
          <img src={logo} alt="logo" />
        </HeaderLogo>
        <HeaderNavContainer>
          <a href="#about-us">About Us</a>
          <a href="#form">Submit</a>
        </HeaderNavContainer>
      </HeaderWrapper>
    </HeaderContainer>
  ) : (
    <Fragment>
      <MobileHeaderContainer>
        <MobileHeaderLogo href="#">
          <img src={logo} alt="logo" />
        </MobileHeaderLogo>
        <MobileHeaderMenu size="large" onClick={handleOpenDrawer}>
          <Menu fontSize="large" />
        </MobileHeaderMenu>
      </MobileHeaderContainer>
      <HomePageHeaderDrawer open={isOpenDrawer} onClose={handleCloseDrawer} />
    </Fragment>
  );
};

const navTitle = "We are working on developing this feature. Please wait until the next version.";
