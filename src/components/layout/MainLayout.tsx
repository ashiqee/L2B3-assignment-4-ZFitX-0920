
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

const MainLayout = () => {
    return (
        <div className='min-h-screen'>
            <NavBar/>
            <div className='pt-0'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;