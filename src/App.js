import "./App.css";
import { Header } from "./components/header/index.js";
import { Home } from "./components/home/index.js";
import { Footer } from "./components/footer/index.js";
import * as React from "react";
import { ContainerDiv } from "./components/style/styles.js";
function App() {
  return (
    <div className="App">
      <Header />
      <ContainerDiv style={{ border: "1px solid balck" }} maxWidth="xl">
        <Home />
      </ContainerDiv>
      <Footer />
    </div>
  );
}

export default App;
