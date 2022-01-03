import React from "react";
import { Home, AboutUs, Contact } from "./screens";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
