"use client";
import { TextField, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";

RHFTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextField({ name, label, helperText, ...other }) {
  const { control } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          variant="filled"
          autoComplete="off"
          {...field}
          fullWidth
          label={label}
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error ? error?.message : helperText}
          InputLabelProps={{
            style: {
              color: isFocused ? theme.palette.primary.main : "#b8b8b8",
            },
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...other}
          style={{ margin: 10 }}
        />
      )}
    />
  );
}
