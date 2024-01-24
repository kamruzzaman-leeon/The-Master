import Lottie from 'lottie-react';
import loading from '../../assets/Loading/Loading.json'

const Loading = () => {
    return (
        <div className="w-32 flex justify-center content-center">
            <Lottie animationData={loading} loop={true} />
        </div>
    );
};

export default Loading;