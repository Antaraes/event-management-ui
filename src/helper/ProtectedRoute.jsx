import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, Navigate } from "react-router";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  // const { isAuthenticated, user } = useSelector((state) => state.auth);
  const user = sessionStorage.getItem("user");

  return user ? <Outlet /> : <Navigate to={"/user/login"} replace />;
};

export default ProtectedRoute;
