
import Lottie from "lottie-react";
import bannerAnimation from "../../../assets/Home/Banner/banner-img.json"
const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-5 flex flex-col content-center justify-center">
            <h2 className="text-5xl font-extrabold max-w-sm text-blue-600">Learn without  limits</h2>
            <p className="py-5 max-w-md">Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
            <div className="flex flex-row content-around gap-3">
            <button className="btn bg-blue-600 text-white text-lg ">Join For Free</button>
                <button></button>
            <button className="btn btn-outline text-blue-600 text-lg ">Try The Master for Business</button>
                <button></button>

            </div>
          </div>
            <div className="p-5">
            <Lottie animationData={bannerAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Banner;