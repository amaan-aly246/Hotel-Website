import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
function RequireAuth() {
  const { auth } = useAuth()
  const location = useLocation()
  return auth.accessToken != undefined ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuth
