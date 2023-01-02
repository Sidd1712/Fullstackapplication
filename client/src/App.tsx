import React from "react";
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
import { store } from "./store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import CreateProduct from "./components/CreateProduct/CreateProduct";

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Navbar link="Hello" ImgSrc={sneakerimage} />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/products/:id" element={<ViewProduct />} />
              <Route path="/createProduct" element={<CreateProduct />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
