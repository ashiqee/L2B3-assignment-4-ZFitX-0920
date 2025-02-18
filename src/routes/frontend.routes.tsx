
import Cart from '@/pages/Cart';
import AboutUs from '@/pages/AboutUs';
import Checkout from '@/pages/Checkout';
import HomePage from '@/pages/HomePage';
import ProductDetails from '@/pages/ProductDetails';
import ProductsPage from '@/pages/ProductsPage';
import ProductManagement from '@/pages/ProductManagement';
import OrderSuccess from '@/components/reusableComponents/OrderSuccess';
import OrdersPage from '@/pages/OrdersPage';

export const frontendPageRoutes = [
  {
    path: '/',
    element: <HomePage />,

    children: [
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'product-management',
        element: <ProductManagement />,
      },
      {
        path: 'order-success',
        element: <OrderSuccess />,
      },
      {
        path: 'orders',
        element: <OrdersPage />,
      },
    ],
  },
];
