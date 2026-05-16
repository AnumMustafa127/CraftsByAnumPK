import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'

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

import ErrorComponent from "./components/ErrorComponent.jsx";
export default function App() {
  return (
    <>

        <Routes>

          <Route path="/" element={<HomePg />} />
          <Route path="/DetailPg/:id" element={<DetailPg />} />
          <Route path="/PaintingPg" element={<PaintingPg />} />
          <Route path="/SketchPg" element={<SketchPg />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/PortraitPg" element={<PortraitPg />} />
          <Route path="/SubscriptionPg" element={<SubscriptionPg />} />
          <Route path="/CaligraphyPg" element={<CaligraphyPg />} />
          <Route path="/PaymentPg" element={<PaymentPg />} />
          <Route path="/CheckoutPg" element={<CheckoutPg />} />
          <Route path="*" element={<ErrorComponent />} />
          
        </Routes>


    </>
  );
}

