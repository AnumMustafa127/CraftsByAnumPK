import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import HomePg from './Pages/HomePg.jsx'
import DetailPg from './Pages/DetailPg.jsx'
import PaintingPg from './Pages/PaintingPg.jsx'
import SketchPg from './Pages/SketchPg.jsx'
import WhatWeDo from './Pages/WhatWeDo.jsx'
import PortraitPg from './Pages/PortraitPg.jsx'
import SubscriptionPg from './Pages/SubscriptionPg.jsx'
import CaligraphyPg from './Pages/CaligraphyPg.jsx'
import PaymentPg from './Pages/PaymentPg.jsx'
import CheckoutPg from './Pages/CheckoutPg.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePg />,
        },
        {
          path: "/HomePg",
          element: <HomePg />,
        },
        {
          path: "/PaintingPg",
          element: <PaintingPg />,
        },
        {
          path: "/SketchPg",
          element: <SketchPg />
        },
        {
          path: "/DetailPg/:id",
          element: <DetailPg />
        },
        {
          path: "/WhatWeDo",
          element: <WhatWeDo />
        },
        {
          path: "/PortraitPg",
          element: <PortraitPg />
        },
         {
          path: "/SubscriptionPg",
          element: <SubscriptionPg />
        },
        {
          path: "/CaligraphyPg",
          element: <CaligraphyPg />
        },
        {
          path: "/CheckoutPg",
          element: <CheckoutPg />
        },
        {
          path: "/PaymentPg",
          element: <PaymentPg />
        },
      ],
    },
  ],
  
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router = {router}/>
   
)
