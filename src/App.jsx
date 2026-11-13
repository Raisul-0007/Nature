import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from './components/Layout';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout"
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
  { index: true, element: <Home/> },
  { path:"/shop", element: <Shop/>},
  { path:"/shop/:id", element:<SingleProduct/>},
  { path:"/cart", element:<Cart/>}
  { path:"/checkout", element:<Checkout/>}
  ]
  }
]);

const App = () => {
  return (
      <RouterProvider router={router}>
      </RouterProvider>
  )
}

export default App
