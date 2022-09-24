import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Index from "../Components/Index";
import useAuthContext from "../Components/hooks/useAuthContext";
const AppRouter = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <Index />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
