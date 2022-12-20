import React from "react";
import logo from "./logo.svg";
import Homepage from "./components/pages/Homepage/Homepage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import sneakerimage from "./Assets/sneakerimage.jpeg";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ViewProduct from "./components/pages/Homepage/ViewProduct/ViewProduct";
import { Provider } from "react-redux";
import store from "./store/Store";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar link="Hello" ImgSrc="./sneakerimage.jpeg" />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:id" element={<ViewProduct />} />
            <Route path="/createProduct" element={<CreateProduct />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
