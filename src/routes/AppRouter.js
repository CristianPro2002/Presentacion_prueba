import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DashboardRoutes from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Index from "../Components/Index";
const AppRouter = () => {
    const [isLoggedIn, setisLoggedIn] = React.useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Index setisLoggedIn={setisLoggedIn} />
                    </PublicRoute>
                } />
                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes setisLoggedIn={setisLoggedIn} />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;