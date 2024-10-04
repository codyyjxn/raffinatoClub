import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../Data/products";

//this component maps thru the products array and returns the id and the name and the image also the price of the product displayed
// we need to update the products component to be able to pass the add to cart so we need to pass it in as arg
const Products = ({ addToCart }) => {
  return (
    <div>
      {/* this will control the display for the items we mapped thru */}
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
