
import Lottie from "lottie-react";
import bannerAnimation from "../../../assets/Home/Banner/banner-img.json"
const Banner = () => {
    return (
        <div className="flex flex-col px-5 md:flex-row-reverse pb-5 mb-20">
            <div className="max-w-screen-sm">
            <Lottie animationData={bannerAnimation} loop={true} />
            </div>
          <div className="flex-1 flex flex-col content-center justify-center">
            <h2 className="text-5xl text-center md:text-left  font-extrabold w-full md:max-w-sm text-blue-600">Learn without limits</h2>
            <p className="py-5 text-center md:text-left min-w-md text-slate-700">Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
            <div className="flex flex-col md:flex-row content-around gap-3">
            <button className="btn bg-blue-600 text-white lg:text-lg ">Join For Free</button>
                {/* <button></button> */}
            <button className="btn btn-outline text-blue-600 lg:text-lg ">Try for Business</button>
                {/* <button></button> */}

            </div>
          </div>
            
        </div>
    );
};

export default Banner;