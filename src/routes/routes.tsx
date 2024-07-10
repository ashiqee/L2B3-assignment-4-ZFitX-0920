import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import {
    createBrowserRouter,
  
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<HomePage/>
        },
        {
            path:'/products',
            element:<ProductsPage/>
        },
        {
            path:'/about-us',
            element:<AboutUs/>
        },
        {
            path:'/cart',
            element:<HomePage/>
        },
      ]
    },
  ]);


export default router;