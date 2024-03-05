import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Form } from "react-router-dom";
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
import { type LoaderFC, withRouterLoader } from "@/common/components/H.O.C";
import { AdminLayout } from "@/common/layouts";
import { LodashUtils } from "@/common/utils";
import { SocialModel } from "@/api/models";
import { AdminSocialPageContext, AdminSocialPageContextType } from "./AdminSocialPage.context";
import { ButtonContainer } from "./AdminSocialPage.styled";

const Page: LoaderFC = ({ loaderData }) => {
  const socialNetworks = useMemo<SocialModel[]>(() => loaderData, [loaderData]);

  const [socialNetworkListForm, setSocialNetworkListForm] = useState<SocialModel[]>(socialNetworks);

  const isDisableButton = LodashUtils.isEqual(socialNetworks, socialNetworkListForm);

  const handleChangeProfile = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.name;
    const profile = event.target.value;
    setSocialNetworkListForm((currentForm) =>
      currentForm.map((form) => {
        if (form.id !== id) return form;
        return new SocialModel(
          form.id,
          form.name,
          profile,
          form.icon,
          form.logo,
          form.isOpen,
          form.order,
        );
      }),
    );
  };

  const handleChangeActiveStatus = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const id = event.target.name;
    setSocialNetworkListForm((currentForm) =>
      currentForm.map((form) => {
        if (form.id !== id) return form;
        return new SocialModel(
          form.id,
          form.name,
          form.profile,
          form.icon,
          form.logo,
          checked,
          form.order,
        );
      }),
    );
  };

  const handleRestoreForm = () => {
    setSocialNetworkListForm(socialNetworks);
  };

  const AdminSocialPageContextValue: AdminSocialPageContextType = {};

  useEffect(() => {
    setSocialNetworkListForm(socialNetworks);
  }, [socialNetworks]);

  return (
    <AdminSocialPageContext.Provider value={AdminSocialPageContextValue}>
      <AdminLayout title="Social Network" contentMaxWidth="100%">
        <Form method="post">
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "10%" }}>Icon</TableCell>
                  <TableCell sx={{ width: "10%" }}>Name</TableCell>
                  <TableCell sx={{ width: "10%" }}>Logo</TableCell>
                  <TableCell sx={{ width: "40%" }}>Social Profile</TableCell>
                  <TableCell sx={{ width: "20%" }}>Collection ID</TableCell>
                  <TableCell sx={{ width: "10%" }}>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {socialNetworkListForm.map((socialNetwork, index) => (
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
                        name={socialNetwork.id}
                        onChange={handleChangeProfile}
                      />
                    </TableCell>
                    <TableCell>{socialNetwork.id}</TableCell>
                    <TableCell>
                      <Switch
                        size="small"
                        name={socialNetwork.id}
                        checked={socialNetwork.isOpen}
                        onChange={handleChangeActiveStatus}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ButtonContainer>
            <Button
              type="button"
              variant="outlined"
              disabled={isDisableButton}
              onClick={handleRestoreForm}
            >
              Restore
            </Button>
            <Button type="submit" variant="contained" disabled={isDisableButton}>
              Save
            </Button>
          </ButtonContainer>
        </Form>
      </AdminLayout>
    </AdminSocialPageContext.Provider>
  );
};

export const AdminSocialPage = withRouterLoader(Page);
