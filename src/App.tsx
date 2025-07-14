import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6', // blue-600
    },
    secondary: {
      main: '#6366f1', // indigo-600
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <StylesProvider disableVendorPrefixes>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  </QueryClientProvider>
);

export default App;
