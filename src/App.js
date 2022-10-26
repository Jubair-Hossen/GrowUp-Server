import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import useCustomTheme from "./Hooks/useCustomTheme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Mode from "./components/Mode";

export const ColorModeContext = React.createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "mode",
    element: <Mode />,
  },
]);

function App() {
  const { colorMode, theme } = useCustomTheme();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <Box sx={{ minHeight: '100vh', height: '100%', backgroundColor: theme.palette.background.paper }}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Box>
    </ColorModeContext.Provider>
  );
}

export default App;
