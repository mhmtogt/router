import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* burada nav ve footer sabit Routes içi değişebilik ilk Route içindeki çağrılır */}
        <Route path="/instructors" element={<Instructors />} />
        {/*inst ile hangi link gelecek hangi isimle onu biz belirliyoruz */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
