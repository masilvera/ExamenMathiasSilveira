import React from "react";
import { Route, Routes } from "react-router-dom";
import CharProvider from "./utils/global.context";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
      <CharProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </CharProvider>
  );
}

export default App;




