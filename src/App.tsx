import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled/Global";
import { theme } from "./components/styled/Theme";
import { HeroSection } from "./components/HeroSection";
import { CardDetailsForm } from "./components/CardDetailsForm";
import { CardDetailsWrapper } from "./components/styled/CardDetailsWrapper.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <main>
          <CardDetailsWrapper>
            <HeroSection />
            <CardDetailsForm />
          </CardDetailsWrapper>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
