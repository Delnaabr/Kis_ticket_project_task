import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ViewProducts from "./components/View/ViewProducts";
import AddProduct from './components/Add/AddProduct'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";


function Menu() {
  return (
    
    <Router>
      <Header/>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewProducts" element={<ViewProducts />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
     <Footer/>
    </Router>
  );

}
export default Menu