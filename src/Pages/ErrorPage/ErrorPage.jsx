import Lottie from 'lottie-react';
import error from '../../assets/errorpage/error.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center content-center'>
            <div className="max-w-screen-sm">
            <Lottie animationData={error} loop={true} />
                <div className='text-center'><Link to="/"><button className='btn btn-outline text-blue-600'>Go to Home</button></Link></div>
            </div>
        </div>
    );
};

export default ErrorPage;