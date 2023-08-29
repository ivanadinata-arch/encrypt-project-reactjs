import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Caesar, Rot13, Vigenere, NotFound, Atbash, Keyword } from "./pages";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Rot13 />} />
        <Route path='/atbash' element={<Atbash />} />
        <Route path='/caesar' element={<Caesar />} />
        <Route path='/vigenere' element={<Vigenere />} />
        <Route path='/keyword' element={<Keyword />} />
      </Routes>
    </Router>
  );
}
