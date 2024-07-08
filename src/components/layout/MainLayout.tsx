
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const MainLayout = () => {
    return (
        <div className='min-h-screen'>
            <NavBar/>
            <div className='pt-0'>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;