import React, { FC, useState } from "react";
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export type PasswordTextFieldProps = TextFieldProps & {};

export const PasswordTextField: FC<PasswordTextFieldProps> = (props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleToggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <TextField
      type={isShowPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleToggleShowPassword}>
              {isShowPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
