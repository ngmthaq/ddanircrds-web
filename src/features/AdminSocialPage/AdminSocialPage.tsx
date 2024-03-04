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
import { AdminSocialPageContext, AdminSocialPageContextType } from "./AdminSocialPage.context";
import { ButtonContainer } from "./AdminSocialPage.styled";

const Page: LoaderFC = ({ loaderData }) => {
  const socialNetworks = useMemo<SocialModel[]>(() => loaderData, [loaderData]);

  const AdminSocialPageContextValue: AdminSocialPageContextType = {};

  return (
    <AdminSocialPageContext.Provider value={AdminSocialPageContextValue}>
      <AdminLayout title="Social Network" contentMaxWidth="100%">
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "10%" }}>Icon</TableCell>
                <TableCell sx={{ width: "10%" }}>Name</TableCell>
                <TableCell sx={{ width: "10%" }}>Logo</TableCell>
                <TableCell sx={{ width: "40%" }}>Social Profile</TableCell>
                <TableCell sx={{ width: "20%" }}>Record ID</TableCell>
                <TableCell sx={{ width: "10%" }}>Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {socialNetworks.map((socialNetwork) => (
                <TableRow key={socialNetwork.id}>
                  <TableCell>
                    <Avatar sx={{ width: 24, height: 24 }} src={socialNetwork.icon} />
                  </TableCell>
                  <TableCell>{socialNetwork.name}</TableCell>
                  <TableCell>
                    <img
                      src={socialNetwork.logo}
                      alt={socialNetwork.name}
                      style={{ height: "100%", width: "80%", objectFit: "contain" }}
                    />
                  </TableCell>
                  <TableCell>
                    <OutlinedInput
                      fullWidth
                      size="small"
                      placeholder="Enter your social profile URL here"
                      value={socialNetwork.profile}
                    />
                  </TableCell>
                  <TableCell>{socialNetwork.id}</TableCell>
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
