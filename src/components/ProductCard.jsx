import React, { useState } from "react";

// this will be displaying the products to the products page this will be made to be able to reuse easy anywhere in our project
// we are passing these as props
const ProductCard = ({ name, image, price, addToCart }) => {
  // we need to add a usestate that will track the items that were added recently from the user to see on the top right corner
  const [bagAlert, setBagAlert] = useState(false);

  // we need to create the function that will return when the user adds to their cart
  // we need to pass the product that we will be using to handle the alert
  const handleBagAlert = (product) => {
    // when added to cart
    addToCart(product);
    // we want to set the bag alert to true when the product is added to the cart
    setBagAlert(true);
    // we want to set a timeout after the code is excuded this timeout wont affect the add to car nor the set bag alert
    setTimeout(() => {
      setBagAlert(false);
    }, 6000);
  };

  return (
    <div>
      <img
        className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4"
        src={image}
        alt={name}
      />
      <div className="flex-col justify-start py-3">
        <div className="font-bold text-sm ">{name}</div>
        <div className="text-gray-600 text-sm">
          <span>${price}</span>
        </div>
      </div>
      <button
        onClick={() => handleBagAlert({ id: name, image, price })}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition duration-300"
      >
        Add To Bag
      </button>
      {/*----------------------Bag Notification--------------*/}
      {bagAlert && (
        <div className="fixed top-20 right-4 w-[300px] h-[100px] bg-black text-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform opacity-90 flex items-center justify-center">
          Added
          <div>
            <button href="/cart">View Bag</button>
          </div>
          <div>
            <button href="/products">Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
