import * as Layout from '@components/Layouts';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Summoners from './Summoners';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout.HeadlessLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<Layout.DefaultLayout />}>
        <Route path="/summoners/:summonerName" element={<Summoners />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
