import Lottie from 'lottie-react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../assets/Loading/Loading.json'
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <>
            {/* <div className='flex justify-center content-center'>
                <span className="loading loading-spinner loading-lg"></span>
            </div> */}
            <div className="max-w-screen-sm">
                <Lottie animationData={Loading} loop={true} />
            </div>
        </>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;