
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeCart,
  increment,
  decrement
} from "../components/slice/Cartslice";

const Cart = () => {
  let dispatch = useDispatch();
  let cartdata = useSelector((state) => state.cart.cartItem);

  let subtotal = cartdata.reduce((total, item) => {
    return total + item.price * item.qun;
  }, 0);

  let shipping = cartdata.length > 0 ? 10 : 0;
  let total = subtotal + shipping;

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-10">
          <p className="text-green-600 font-semibold mb-2">
            MY SHOPPING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Shopping Cart
          </h2>
          <p className="text-gray-500 mt-2">
            Manage your products and checkout easily.
          </p>
        </div>

        {cartdata.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm text-center py-24">
            <div className="text-6xl text-green-600 mb-5">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't added any products yet.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-semibold transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-5 md:p-7">

              <div className="flex justify-between items-center border-b pb-5 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Cart Items
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {cartdata.length} Products
                  </p>
                </div>

                <button
                  onClick={() => dispatch(removeCart())}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Clear Cart
                </button>
              </div>

              {cartdata.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap md:flex-nowrap items-center gap-5 border-b border-gray-100 py-6"
                >
                  <div className="w-28 h-28 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="text-green-600 font-bold mt-2">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => dispatch(decrement(item))}
                        className="w-9 h-9 border border-gray-200 rounded-lg hover:bg-green-600 hover:text-white transition font-bold"
                      >
                        -
                      </button>

                      <span className="font-semibold text-gray-900">
                        {item.qun}
                      </span>

                      <button
                        onClick={() => dispatch(increment(item))}
                        className="w-9 h-9 border border-gray-200 rounded-lg hover:bg-green-600 hover:text-white transition font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      ${(item.price * item.qun).toFixed(2)}
                    </h4>

                    <button
                      onClick={() => dispatch(removeCart(item))}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <Link
                to="/shop"
                className="inline-block mt-6 text-green-600 hover:text-green-700 font-semibold"
              >
                ← Continue Shopping
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">

              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h3>

              <div className="flex justify-between mb-5 text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mb-5 text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold text-gray-900">
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="border-t border-dashed my-5"></div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-green-600">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl mt-7 transition duration-300"
              >
                Proceed to Checkout
              </button>

              <p className="text-center text-gray-400 text-sm mt-5">
                Secure and Easy Shopping
              </p>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
