import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/Fullstack";
import Aws from "./pages/Aws";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paths" element={<Paths />}>
          {/* "/"slash eklenen yerden "/slash" burada base devamına
         / ekleve stacks ekle ve direk stacks e git "/stacks/xys"  base sonra stacks sonra xys ye git 
         buna Absolute adresleme deniyor 
         
         "=fs"  bulunduğu yere göre fs adresine git demek oluyor  bu da relative dir */}
          <Route path="fs" element={<FullStack />}>
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
          </Route>
          <Route path="aws" element={<Aws />} />
        </Route>

        <Route path="* " element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
