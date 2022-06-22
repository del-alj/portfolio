import "./App.css";
import { Header } from "./components/header/index.js";
import * as React from 'react';
import Container from '@mui/material/Container';
function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm"></Container>
    </div>
  );
}

export default App;
