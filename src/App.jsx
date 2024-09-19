import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

// ------------------VISTAS--------------
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Layout from "./components/Layout";

// import ShoppingCart from './views/ShoppingCart'
// import ProductDetails from './views/ProductDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
