// src/App.jsx
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const App = () => (
  <>
    <GlobalStyles />
    <Layout id="top">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </Layout>
  </>
);

export default App;
