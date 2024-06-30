import { ThemeProvider } from '@mui/material';
import theme from "./utils";
import Home from "./pages/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
