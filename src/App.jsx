import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from './components/Layout';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
  { index: true, element: <Home/> },
  { path:"/shop", element: <Shop/>},
  { path:"/shop/:id", element:<SingleProduct/>}
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
