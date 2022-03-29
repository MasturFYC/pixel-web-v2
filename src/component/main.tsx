import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ShowFirstPage } from 'first-page';


// const Trx = React.lazy(() => import('./trx'));

// const ReportTrxtByMonth = React.lazy(() => import('../Report/ReportTrxByMonth'));

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowFirstPage />} />
    </Routes>
  );
}

export default Main;