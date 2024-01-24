import Lottie from 'lottie-react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
     }
    if (user) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;