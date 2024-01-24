import Lottie from 'lottie-react';
import loading from '../../assets/Loading/Loading.json'

const Loading = () => {
    return (
        <div className=''>
            <div className="w-32 mx-auto">
            <Lottie animationData={loading} loop={true} />
        </div>
        </div>
    );
};

export default Loading;