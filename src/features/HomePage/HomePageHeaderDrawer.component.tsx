import React, { FC } from "react";
import logo from "@/theme/assets/logo-drawer-4x.png";
import { MobileDrawer, MobileDrawerLogo, MobileDrawerNav } from "./HomePage.styled";

export type HomePageHeaderDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const HomePageHeaderDrawer: FC<HomePageHeaderDrawerProps> = ({ open, onClose }) => {
  return (
    <MobileDrawer anchor="right" open={open} onClose={onClose}>
      <MobileDrawerLogo>
        <img src={logo} alt="logo" />
      </MobileDrawerLogo>
      <MobileDrawerNav>
        <a href="javascript:void(0)" className="disabled">
          Artist
        </a>
        <a href="javascript:void(0)" className="disabled">
          Release
        </a>
        <a href="#about-us" onClick={onClose}>
          About Us
        </a>
        <a href="#form" onClick={onClose}>
          Submit
        </a>
      </MobileDrawerNav>
    </MobileDrawer>
  );
};
