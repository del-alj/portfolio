// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import SirWayPage from "./components/SirWayPage"; // <-- import your new page

const App = () => (
  <Router>
    <GlobalStyles />
    <Routes>
      {/* Home / main portfolio */}
      <Route
        path="/"
        element={
          <Layout id="top">
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
            <Footer />
          </Layout>
        }
      />

      {/* SirWay Project Page */}
      <Route path="/sirway" element={<SirWayPage />} />
    </Routes>
  </Router>
);

export default App;
