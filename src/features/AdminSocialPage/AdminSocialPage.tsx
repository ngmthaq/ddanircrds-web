import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useSubmit } from "react-router-dom";
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
import { type LoaderFC, withRouterAdminLoader } from "@/common/components/H.O.C";
import { AdminLayout } from "@/common/layouts";
import { LodashUtils } from "@/common/utils";
import { SocialModel } from "@/api/models";
import { AdminSocialPageContext, AdminSocialPageContextType } from "./AdminSocialPage.context";
import { ButtonContainer } from "./AdminSocialPage.styled";

const Page: LoaderFC = ({ loaderData }) => {
  const submit = useSubmit();

  const socialNetworks = useMemo<SocialModel[]>(() => loaderData, [loaderData]);

  const [socialNetworkListForm, setSocialNetworkListForm] = useState<SocialModel[]>(socialNetworks);

  const isDisableButton = LodashUtils.isEqual(socialNetworks, socialNetworkListForm);

  const handleChangeProfile = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.getAttribute("data-id");
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
    const id = event.target.getAttribute("data-id");
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
    setSocialNetworkListForm(LodashUtils.cloneDeep(socialNetworks));
  };

  const handleSubmitForm = () => {
    submit(JSON.stringify(socialNetworkListForm), {
      action: window.location.pathname,
      method: "post",
      encType: "application/json",
    });
  };

  const CustomSwitch: any = Switch;

  const AdminSocialPageContextValue: AdminSocialPageContextType = {};

  useEffect(() => {
    setSocialNetworkListForm(LodashUtils.cloneDeep(socialNetworks));
  }, [socialNetworks]);

  return (
    <AdminSocialPageContext.Provider value={AdminSocialPageContextValue}>
      <AdminLayout title="Social Network" contentMaxWidth="100%">
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "10%" }}>Icon</TableCell>
                <TableCell sx={{ width: "15%" }}>Name</TableCell>
                <TableCell sx={{ width: "40%" }}>Social Profile</TableCell>
                <TableCell sx={{ width: "25%" }}>Collection ID</TableCell>
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
                    <OutlinedInput
                      fullWidth
                      size="small"
                      placeholder="Enter your social profile URL here"
                      value={socialNetwork.profile}
                      onChange={handleChangeProfile}
                      inputProps={{ "data-id": socialNetwork.id }}
                    />
                  </TableCell>
                  <TableCell>{socialNetwork.id}</TableCell>
                  <TableCell>
                    <CustomSwitch
                      size="small"
                      checked={socialNetwork.isOpen}
                      onChange={handleChangeActiveStatus}
                      inputProps={{ "data-id": socialNetwork.id }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonContainer>
          <Button
            title="Restore previous setting"
            type="button"
            variant="outlined"
            disabled={isDisableButton}
            onClick={handleRestoreForm}
          >
            Restore
          </Button>
          <Button
            title="Save"
            color="primary"
            variant="contained"
            onClick={handleSubmitForm}
            disabled={isDisableButton}
          >
            Save
          </Button>
        </ButtonContainer>
      </AdminLayout>
    </AdminSocialPageContext.Provider>
  );
};

export const AdminSocialPage = withRouterAdminLoader(Page);
