import { createBrowserRouter } from 'react-router-dom';
import LandingPages from '../pages/landing_pages';
import Register from '../pages/register';
import Login from '../pages/login';
import HomeUser from '../pages/app_user/home';
import MerchantUser from '../pages/app_user/merchant';
import QRScanner from '../pages/app_user/qr_scanner';
import UniCoinTradingApp from '../pages/app_user/trading';
import ProfileUser from '../pages/app_user/profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPages />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <HomeUser />
    },
    {
        path: '/merchant-user',
        element: <MerchantUser />
    },
    {
        path: '/qrs-canner',
        element: <QRScanner />
    },
    {
        path: '/trading',
        element: <UniCoinTradingApp />
    },
    {
        path: '/profile-user',
        element: <ProfileUser />
    }
]);

export default router;