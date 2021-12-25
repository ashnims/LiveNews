import "./App.css";
import { Headline } from "./component/Headline";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./component/Global";

function App() {
  return (
    <>
      <ThemeProvider theme={{}}>
        <GlobalStyle />

        <Headline />
      </ThemeProvider>
    </>
  );
}

export default App;
