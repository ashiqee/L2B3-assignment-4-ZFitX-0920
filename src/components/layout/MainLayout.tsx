import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavBar from '../shared/NavBar';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import LoadingPage from '../shared/LoadingPage';

const MainLayout = () => {
  const { isLoading } = useGetProductsQuery({});
  return (
    <>
     
       
        {isLoading ? (
          <>
            <LoadingPage />
          </>
        ) : (
            <div className="min-h-screen">
            <NavBar />
         
          <div className="pt-0">
            <Outlet />
          </div>
            <Footer />
            </div>
        )}
     
    
    </>
  );
};

export default MainLayout;
