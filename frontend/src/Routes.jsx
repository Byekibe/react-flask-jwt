import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LogoutPage from './pages/LogoutPage';
import DemoPage from './pages/DemoPage.jsx';

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logoutpage" element={<LogoutPage />} />
            <Route path="/demo" element={<DemoPage />} />
        </Routes>
    );
};

export default MyRoutes;