import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import useCustomTheme from "./Hooks/useCustomTheme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mode from "./components/Mode";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Layout from "./pages/AdminDeshboard/Layout";
import Overview from "./pages/AdminDeshboard/Overview";

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
      },
      {
        path: "Products",
        element: <Mode />
      },
      {
        path: "Admin",
        element: <Layout />,
        children: [
          {
            path: "/Admin",
            element: <Overview />
          },
          {
            path: "/Admin/Overview",
            element: <Overview />
          },
          {
            path: "/Admin/Products",
            element: <Overview />
          },
        ]
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
