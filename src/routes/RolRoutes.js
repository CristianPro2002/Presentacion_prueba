import { Navigate } from "react-router-dom";
export const RolRoutes = () => {
  const Rol = localStorage.getItem("Rol");

  return Rol == 1 ? (
    <Navigate to = "/Roles"/>
  ) : Rol == 2 ? (
    <Navigate to = "/Rasesor"/>
  ) : Rol == 3 ? (
    <Navigate to = "/Rgerente"/>
  ) : Rol == 4 ? (
    <Navigate to = "/Rcajero"/>
  ) : Rol == 5 ? (
    <Navigate to = "/Rcajerop"/>
  ) : (
    <Navigate to="/*" />
  );
};
