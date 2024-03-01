import React, { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom";
import { Divider, TextField, Typography } from "@mui/material";
import { type InputProps } from "@mui/material/Input/Input";
import { withRouterLoader, type LoaderFC } from "@/common/components/H.O.C";
import { BaseLayout } from "@/common/layouts";
import { ConfirmDialog, PasswordTextField } from "@/common/components/Generics";
import {
  BackgroundContainer,
  LoginButton,
  LoginForm,
} from "@/features/AdminLoginPage/AdminLoginPage.styled";
import {
  AdminLoginPageContext,
  type AdminLoginPageContextType,
} from "@/features/AdminLoginPage/AdminLoginPage.context";

const Page: LoaderFC = () => {
  type LoginFormType = {
    email: string;
    password: string;
  };

  const actionErrors = useActionData() as string;

  const [form, setForm] = useState<LoginFormType>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChangeFormInput: InputProps["onChange"] = (event) => {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCloseErrorDialog = () => {
    setErrorMessage("");
  };

  const isDisableLoginButton = Boolean(form.email === "" || form.password === "");

  const HomePageContextValue: AdminLoginPageContextType = {};

  useEffect(() => {
    if (actionErrors) {
      console.error(actionErrors);
      setErrorMessage(actionErrors);
    }
  }, [actionErrors]);

  return (
    <AdminLoginPageContext.Provider value={HomePageContextValue}>
      <BaseLayout>
        <BackgroundContainer>
          <LoginForm>
            <Form method="post">
              <Typography marginBottom="24px" textAlign="center" variant="h4">
                Sign in to Dashboard
              </Typography>
              <TextField
                fullWidth
                type="email"
                margin="dense"
                name="email"
                label="What is your email?"
                variant="outlined"
                autoComplete="off"
                onChange={handleChangeFormInput}
              />
              <PasswordTextField
                fullWidth
                margin="dense"
                name="password"
                label="What is your password?"
                variant="outlined"
                onChange={handleChangeFormInput}
              />
              <LoginButton
                fullWidth
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                disabled={isDisableLoginButton}
              >
                Login
              </LoginButton>
              <Divider />
              <Typography variant="caption" display="block" textAlign="center" marginTop="16px">
                Don't have an account? <br /> Contact the administrator to be granted a system login
                account.
              </Typography>
            </Form>
          </LoginForm>
        </BackgroundContainer>
        <ConfirmDialog
          open={Boolean(errorMessage)}
          message={errorMessage}
          onAccept={handleCloseErrorDialog}
        />
      </BaseLayout>
    </AdminLoginPageContext.Provider>
  );
};

export const AdminLoginPage = withRouterLoader(Page);
