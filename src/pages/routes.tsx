import * as Layout from '@components/Layouts';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout.HeadlessLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<Layout.DefaultLayout />}>
        <Route path="/summoners/:summonerName" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
