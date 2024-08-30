
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

function ProtectedRoute({ children }) {
  let auth = useAuth();
  return auth.user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;