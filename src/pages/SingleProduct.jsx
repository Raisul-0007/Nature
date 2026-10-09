import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "./../components/Container";
import { FaStar, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  let dispatch = useDispatch()
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-xl text-gray-500">Loading product...</p>
      </div>
    );
  }
  let handleCart= (item)=>{
    dispatch(productCart({...item, qun:1}))
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <Container className="">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition"
        >
          <FaArrowLeft />
          Back to Shop
        </Link>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-50 min-h-125 flex items-center justify-center p-10 relative">
              <span className="absolute top-6 left-6 bg-primary text-white text-sm font-medium px-4 py-2 rounded-full">
                {product.brand}
              </span>

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-105 object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
                {product.category}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>
              <div className="flex items-center gap-3 mt-5">
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-gray-500 text-sm">
                  {product.rating} / 5
                </span>
              </div>
              <div className="mt-7 flex items-center gap-4">
                <span className="text-4xl font-bold text-primary">
                  ${product.price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${( product.price /(1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  {product.discountPercentage}% OFF
                </span>
              </div>
              <p className="text-gray-600 leading-7 mt-6">
                {product.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-7">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-400">Brand</p>
                  <p className="font-semibold text-gray-800 mt-1">
                    {product.brand}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-400">Stock</p>
                  <p className="font-semibold text-green-600 mt-1">
                    {product.stock} Available
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button onClick={()=> handleCart(product)} className="flex-1 flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-semibold hover:bg-black transition duration-300 cursor-pointer">
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <button className="flex-1 border-2 border-primary text-primary py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 mt-8 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Product Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <p className="text-sm text-gray-400">SKU</p>
              <p className="font-semibold mt-1">{product.sku}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Weight</p>
              <p className="font-semibold mt-1">{product.weight} kg</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Warranty</p>
              <p className="font-semibold mt-1">
                {product.warrantyInformation}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Shipping</p>
              <p className="font-semibold mt-1">
                {product.shippingInformation}
              </p>
            </div>

          </div>
        </div>

      </Container>
    </div>
  );
};

export default SingleProduct;