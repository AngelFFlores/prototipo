import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "./context/AuthContext"

export const ProtectedRoute = (() => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <h1> loading..</h1>
  if (!loading && !isAuthenticated) return <Navigate to='/login' replace />

  return <Outlet />
})