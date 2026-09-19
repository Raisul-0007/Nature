import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from './components/Layout';
import Shop from './pages/Shop';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
  { index: true, element: <Home/> },
  { path:"/shop", element: <Shop/>}
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
