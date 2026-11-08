import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "./slice/Cartslice";

const Cart = () => {
  // const dispatch = useDispatch();

  // const cartItem = useSelector(
  //   (state) => state.cart.cartItem
  // );

  // const subtotal = cartItem.reduce(
  //   (total, item) => total + item.price * item.qun,
  //   0
  // );

  // const shipping = cartItem.length > 0 ? 10 : 0;
  // const total = subtotal + shipping;

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8">
          Shopping Cart
        </h2>

        {cartItem.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl">
            <h2 className="text-2xl font-semibold">
              Your Cart is Empty
            </h2>
            <Link
              to="/shop"
              className="inline-block mt-5 bg-black text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Products */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6">

              <div className="flex justify-between mb-6">
                <h3 className="text-xl font-semibold">
                  Cart Items ({cartItem.length})
                </h3>

                <button
                  onClick={() => dispatch(clearCart())}
                  className="text-red-500"
                >
                  Clear Cart
                </button>
              </div>

              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap md:flex-nowrap items-center gap-5 border-b py-6"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-24 h-24 object-contain bg-gray-100 rounded-lg"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">
                      {item.title}
                    </h4>

                    <p className="text-gray-500 mt-2">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                      <button
                        onClick={() =>
                          dispatch(
                            removeFromCart(item.id)
                          )
                        }
                        className="border px-3 py-1 rounded"
                      >
                        -
                      </button>

                      <span>{item.qun}</span>

                      <button
                        onClick={() =>
                          dispatch(addToCart(item))
                        }
                        className="border px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="font-bold">
                    ${(item.price * item.qun).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl p-6 h-fit">
              <h3 className="text-xl font-semibold mb-6">
                Order Summary
              </h3>

              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <hr className="my-5" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg mt-7 hover:bg-gray-800">
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="block text-center mt-5 text-gray-500"
              >
                Continue Shopping
              </Link>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;