import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import useCustomTheme from "./Hooks/useCustomTheme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mode from "./components/Mode";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";

export const ColorModeContext = React.createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "mode",
        element: <Mode />
      }
    ]
  }
]);

function App() {
  const { colorMode, theme } = useCustomTheme();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <Box sx={{
        minHeight: '100vh',
        height: '100%',
        backgroundColor: theme.palette.background.paper
      }}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Box>
    </ColorModeContext.Provider>
  );
}

export default App;
