import "./App.css";
import * as React from "react";
import { Header } from "./components/header/index.js";
import { Footer } from "./components/footer/index.js";
import { Home } from "./components/pages/home/index.js";
import { About } from "./components/pages/about/index.js";
import { Projects } from "./components/pages/projects/index.js";
import { Contact } from "./components/pages/contact/index.js";
import { ContainerDiv } from "./components/style/styles.js";
import { palette } from "./assets/color";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ background: palette.première }}>
      <ContainerDiv style={{ border: "1px solid balck" }} maxWidth="xl">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ContainerDiv>
      <Footer />
    </div>
  );
}

export default App;
