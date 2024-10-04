import React from "react";

const Cart = ({ isOpen, onClose, items }) => {
  return (
    <div>
      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={onClose} // Clicking outside the cart will also close it
        />
      )}

      {/* This will be the cart SideBar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "300px" }}
      >
        {/* This will be the close button for the side bar */}
        <button
          onClick={onClose}
          className="p-4 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>

        <h2 className="p-4 text-lg font-bold underline">Shopping Bag</h2>

        {/* Cart items That will be displayed on the sidebar when added*/}
        <div className="p-4">
          {items.length === 0 ? (
            <p className="text-sm font-semibold text-gray-700">
              YOU HAVE NO ITEMS IN YOUR SHOPPING CART BAG
              <br />
              FREE SHIPPING IN US FOR ORDERS OVER $200 USD
            </p>
          ) : (
            items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between mb-2 border-b border-gray-200 pb-2"
              >
                <span className="text-sm font-bold">{item.name}</span>
                <span className="text-sm font-bold">${item.price}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
