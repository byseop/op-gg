import { DefaultLayout } from '@components/Layouts';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
