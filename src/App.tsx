import { ThemeProvider } from '@mui/material';
import theme from "./utils";
import MainWrapper from "./pages/mainWrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper />
    </ThemeProvider>
  );
}

export default App;
