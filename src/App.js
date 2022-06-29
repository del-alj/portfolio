import "./App.css";
import { Header } from "./components/header/index.js";
import { Home } from "./components/home/index.js";
import { Footer } from "./components/footer/index.js";
import * as React from "react";
import { ContainerDiv } from "./components/style/styles.js";
import {palette} from "./assets/color";
function App() {
  return (
    <div className="App" style={{background: palette.première}}>
      <ContainerDiv style={{ border: "1px solid balck" }} maxWidth="xl">
       <Header />
      
        <Home />
      </ContainerDiv>
      <Footer />
    </div>
  );
}

export default App;
