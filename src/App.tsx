import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled/Global";
import { theme } from "./components/styled/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
