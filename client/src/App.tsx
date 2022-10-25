import React from "react";
import logo from "./logo.svg";
import Homepage from "./components/pages/Homepage/Homepage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import sneakerimage from "./Assets/sneakerimage.jpeg";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
import ViewProduct from "./components/pages/Homepage/ViewProduct/ViewProduct";
const mockProducts = [
  {
    name: "Nike React Infinity Run Flyknit 3",
    price: "$139.99",
    image: sneakerimage,
    desc: "Women's Road Running Shoes",
    productHref: "Bla",
    productId: 1,
  },
  {
    name: "Nike Flex Runner 2",
    price: "$70.00",
    image: sneakerimage,
    desc: "Older Kids' Road Running Shoes",
    productHref: "Bla",
    productId: 2,
  },
  {
    name: "Nike Revolution 6 FlyEase",
    price: "$80.00",
    image: sneakerimage,
    desc: "Older Kids' Easy On/Off Road Running Shoes",
    productHref: "Bla",
    productId: 3,
  },
  {
    name: "Nike Free Metcon 4",
    price: "$170.00",
    image: sneakerimage,
    desc: "Women's Training Shoes",
    productHref: "Bla",
    productId: 4,
  },
];
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar link="Hello" ImgSrc="./sneakerimage.jpeg" />
        <Routes>
          <Route path="/" element={<Homepage products={mockProducts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewProduct" element={<ViewProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
