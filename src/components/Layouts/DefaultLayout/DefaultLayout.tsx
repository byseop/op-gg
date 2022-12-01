import { Outlet } from 'react-router-dom';
import { Header } from '@components/Layouts';

interface IProps {
  className?: string;
}

const DefaultLayout: React.FC<IProps> = ({ className }) => {
  return (
    <>
      <Header />
      <div className={`${className} default-layout layout`}>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
