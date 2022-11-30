import { Outlet } from 'react-router-dom';
import { Header } from '@components/Layouts';

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
