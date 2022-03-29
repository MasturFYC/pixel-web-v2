import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ShowFirstPage } from 'first-page';


const TokoSentra = React.lazy(() => import('pages/toko-sentra'));

// const ReportTrxtByMonth = React.lazy(() => import('../Report/ReportTrxByMonth'));

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowFirstPage />} />
      <Route path="/toko-sentra" element={<Suspense fallback={<div>Please wait ...</div>}><TokoSentra /></Suspense>} />
    </Routes>
  );
}

export default Main;