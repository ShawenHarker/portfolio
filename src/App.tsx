import { ThemeProvider } from '@mui/material';
import theme from "./utils";
import MainLayout from "./layouts/MainLayout";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
          <MainLayout />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
