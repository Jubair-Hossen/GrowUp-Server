import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Mode from "./components/Mode";
import useCustomTheme from "./Hooks/useCustomTheme";

export const ColorModeContext = React.createContext();

function App() {
  const { colorMode, theme } = useCustomTheme();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <Box sx={{ height: '100vh', backgroundColor: theme.palette.background.paper }}>
        <ThemeProvider theme={theme}>
          <Header></Header>
          <Mode></Mode>
        </ThemeProvider>
      </Box>
    </ColorModeContext.Provider>
  );
}

export default App;
