import React, { useMemo } from "react";
import {
  Avatar,
  Button,
  OutlinedInput,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { withRouterLoader, type LoaderFC } from "@/common/components/H.O.C";
import { AdminLayout } from "@/common/layouts";
import { SocialModel } from "@/api/models";
import iconFacebook from "@/theme/assets/icon-facebook.png";
import iconInstagram from "@/theme/assets/icon-instagram.png";
import iconYoutube from "@/theme/assets/icon-youtube.png";
import iconSpotify from "@/theme/assets/icon-spotify.png";
import iconSoundCloud from "@/theme/assets/icon-soundcloud.png";
import iconTiktok from "@/theme/assets/icon-tiktok.png";
import { AdminSocialPageContext, AdminSocialPageContextType } from "./AdminSocialPage.context";
import { ButtonContainer } from "./AdminSocialPage.styled";

const Page: LoaderFC = () => {
  const socialNetworks = useMemo<SocialModel[]>(
    () => [
      new SocialModel("1", "Facebook", "", iconFacebook, true),
      new SocialModel("2", "Instagram", "", iconInstagram, true),
      new SocialModel("3", "Youtube", "", iconYoutube, true),
      new SocialModel("4", "Spotify", "", iconSpotify, true),
      new SocialModel("5", "SoundCloud", "", iconSoundCloud, true),
      new SocialModel("6", "Tiktok", "", iconTiktok, true),
    ],
    [],
  );

  const AdminSocialPageContextValue: AdminSocialPageContextType = {};

  return (
    <AdminSocialPageContext.Provider value={AdminSocialPageContextValue}>
      <AdminLayout title="Social Network" contentMaxWidth="100%">
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "10%" }}>ID</TableCell>
                <TableCell sx={{ width: "10%" }}>Icon</TableCell>
                <TableCell sx={{ width: "15%" }}>Name</TableCell>
                <TableCell sx={{ width: "55%" }}>Social Profile</TableCell>
                <TableCell sx={{ width: "10%" }}>Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {socialNetworks.map((socialNetwork) => (
                <TableRow key={socialNetwork.id}>
                  <TableCell>{socialNetwork.id}</TableCell>
                  <TableCell>
                    <Avatar sx={{ width: 24, height: 24 }} src={socialNetwork.icon} />
                  </TableCell>
                  <TableCell>{socialNetwork.name}</TableCell>
                  <TableCell>
                    <OutlinedInput
                      fullWidth
                      size="small"
                      placeholder="Enter your social profile URL here"
                      value={socialNetwork.profile}
                    />
                  </TableCell>
                  <TableCell>
                    <Switch size="small" defaultChecked={socialNetwork.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonContainer>
          <Button variant="outlined">Restore</Button>
          <Button variant="contained">Save</Button>
        </ButtonContainer>
      </AdminLayout>
    </AdminSocialPageContext.Provider>
  );
};

export const AdminSocialPage = withRouterLoader(Page);
