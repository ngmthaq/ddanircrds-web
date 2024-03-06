import React, { ChangeEvent, useMemo, useState } from "react";
import { Form } from "react-router-dom";
import { AdminLayout } from "@/common/layouts";
import { withRouterAdminLoader, type LoaderFC } from "@/common/components/H.O.C";
import { AboutUsModel } from "@/api/models";
import {
  AdminAboutUsContentPageContext,
  type AdminAboutUsContentPageContextType,
} from "./AdminAboutUsContentPage.context";
import { Button, TextField } from "@mui/material";
import { ButtonContainer } from "./AdminAboutUsContentPage.styled";

const Page: LoaderFC = ({ loaderData }) => {
  const aboutUs = useMemo<AboutUsModel>(() => loaderData, [loaderData]);

  const [content, setContent] = useState<string>(aboutUs.content);

  const isDisableButton = aboutUs.content === content;

  const isError = content.trim().length === 0;

  const handleRestoreForm = () => {
    setContent(aboutUs.content);
  };

  const handleChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const AdminAboutUsContentPageContextValue: AdminAboutUsContentPageContextType = {};

  return (
    <AdminAboutUsContentPageContext.Provider value={AdminAboutUsContentPageContextValue}>
      <AdminLayout title="About Us Content" contentMaxWidth="100%">
        <Form method="post">
          <input type="hidden" name="id" value={aboutUs.id} />
          <TextField
            multiline
            fullWidth
            maxRows={12}
            name="content"
            label="Edit your 'About Us' content here"
            helperText={isError ? "Please do not leave this field empty" : ""}
            value={content}
            error={isError}
            onChange={handleChangeContent}
          />
          <ButtonContainer>
            <Button
              title="Restore previous content"
              type="button"
              variant="outlined"
              disabled={isDisableButton}
              onClick={handleRestoreForm}
            >
              Restore
            </Button>
            <Button
              type="submit"
              title="Save"
              color="primary"
              variant="contained"
              disabled={isDisableButton || isError}
            >
              Save
            </Button>
          </ButtonContainer>
        </Form>
      </AdminLayout>
    </AdminAboutUsContentPageContext.Provider>
  );
};

export const AdminAboutUsContentPage = withRouterAdminLoader(Page);
