"use client";
import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeOptions = useMemo(
    () => ({
      palette: {
        mode: "light" as const, // Use 'light' or 'dark'
      },
      primary: {
        main: "var(--primary-color)", // Updated property name to 'main'
      },
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
