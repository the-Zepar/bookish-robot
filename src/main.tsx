import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing.tsx";
import About from "./pages/About.tsx";
import Shop from "./pages/Shop.tsx";
import { CartProvider } from "./context/CartProvider.tsx";
import Cart from "./pages/Cart.tsx";
import Contact from "./pages/Contact.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  </StrictMode>
);
