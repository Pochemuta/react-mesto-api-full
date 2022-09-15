import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...props }) {
  return props.loggedIn ? Component : <Navigate to="/sign-in"/>;
}
