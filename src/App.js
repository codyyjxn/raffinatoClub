import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import { useState } from "react";
import products from "./Data/products";
import Cart from "./components/Cart";
import Contacts from "./Pages/Contacts";

// Create a separate component for rendering the logo only on the home page
function HomeLogo() {
  return (
    <div className="flex justify-center py-20">
      <a href="/products">
        <img
          src="/assets/raffinato.jpg"
          alt="b/w logo"
          className="max-w-2xl w-full"
        />
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <HomeApp />
    </Router>
  );
}

// Move useLocation inside the Router context
function HomeApp() {
  const location = useLocation();

  // this section will handle the cart visisblity
  // we need to start are cart as false becasue when its clicked it will be true
  const [isCartOpen, setIsCartOpen] = useState(false);
  // we start it as an empty cart
  const [cartItems, setCartItems] = useState([]);

  //function will toggle the cart
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // function will add to the cart
  // we need to use the spread to the cart and current item added.
  // ADD TO CART FUNCTION
  const addToCart = (items) => {
    setCartItems((prevItems) => [...prevItems, items]);
  };

  return (
    <div className="App">
      {/* This will let the user toggle the cart in the home page*/}
      <Navbar toggleCart={toggleCart} />
      <Cart isOpen={isCartOpen} onClose={toggleCart} items={cartItems} />

      {/* Defines Routes */}
      <Routes>
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        {/* Add other routes like home or contact here */}
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>

      {/* Render the Raffinato logo only on the home page */}
      {location.pathname === "/" && <HomeLogo />}
    </div>
  );
}

export default App;
