import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavBar from '../shared/NavBar';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import LoadingPage from '../shared/LoadingPage';

const MainLayout = () => {
  const { isLoading } = useGetProductsQuery({});
  return (
    <>
      <div className="min-h-screen">
        <NavBar />
        {isLoading ? (
          <>
            <LoadingPage />
          </>
        ) : (
          <div className="pt-0">
            <Outlet />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
