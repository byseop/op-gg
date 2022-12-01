import { Outlet } from 'react-router-dom';

interface IProps {
  className?: string;
}

const HeadlessLayout: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className} headless-layout-content layout`}>
      <Outlet />
    </div>
  );
};

export default HeadlessLayout;
