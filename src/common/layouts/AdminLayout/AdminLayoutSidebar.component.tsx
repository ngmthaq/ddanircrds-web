import React, { ReactNode, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { Logout, QueueMusic, Share, TextSnippet, ViewCarousel } from "@mui/icons-material";
import { AdminSocialPagePath } from "@/configs/router/routes";
import logo from "@/theme/assets/logo-app-4x.png";
import { Sidebar, SidebarItem, SidebarItemWrapper, SidebarLogoWrapper } from "./AdminLayout.styled";
import { AuthUtils } from "@/common/utils";

export const AdminLayoutSidebar = () => {
  type AdminSidebarItemType = {
    path: string;
    title: string;
    Icon: ReactNode;
  };

  const location = useLocation();

  const sidebarItems = useMemo<AdminSidebarItemType[]>(
    () => [
      {
        path: AdminSocialPagePath.path,
        title: "Social Network",
        Icon: <Share fontSize="small" />,
      },
      { path: "#", title: "Top Banner Slider", Icon: <ViewCarousel fontSize="small" /> },
      { path: "#", title: "About Us Content", Icon: <TextSnippet fontSize="small" /> },
      { path: "#", title: "Music Submission", Icon: <QueueMusic fontSize="small" /> },
    ],
    [],
  );

  return (
    <Sidebar component="aside">
      <SidebarLogoWrapper>
        <a href="/" target="_blank">
          <img src={logo} alt="logo" />
        </a>
      </SidebarLogoWrapper>
      <SidebarItemWrapper>
        {sidebarItems.map((sidebarItem, index) => (
          <Link to={sidebarItem.path} key={index}>
            <SidebarItem className={location.pathname === sidebarItem.path ? "active" : ""}>
              {sidebarItem.Icon}
              <Typography>{sidebarItem.title}</Typography>
            </SidebarItem>
          </Link>
        ))}
        <SidebarItem onClick={() => AuthUtils.logout({ openLoading: true })}>
          <Logout fontSize="small" />
          <Typography>Logout</Typography>
        </SidebarItem>
      </SidebarItemWrapper>
    </Sidebar>
  );
};
