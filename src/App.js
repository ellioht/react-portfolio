import React from "react";
import "./styles/App.css";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/react-portfolio" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
