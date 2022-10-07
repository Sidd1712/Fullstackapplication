import React from "react";
import logo from "./logo.svg";
import Homepage from "./components/pages/Homepage/Homepage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
const mockProducts = [
  {
    name: "Bla",
    price: "Bla",
    image: "Bla",
    desc: "Bla",
    productHref: "Bla",
  },
  {
    name: "Bla",
    price: "Bla",
    image: "Bla",
    desc: "Bla",
    productHref: "Bla",
  },
  {
    name: "Bla",
    price: "Bla",
    image: "Bla",
    desc: "Bla",
    productHref: "Bla",
  },
];
function App() {
  return (
    <div className="App">
      <Navbar link="Hello" ImgSrc="./sneakerimage.jpeg" />
      <Homepage products={mockProducts} />
    </div>
  );
}

export default App;
