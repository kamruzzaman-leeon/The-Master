import Lottie from "lottie-react";
import countchart from '../../../assets/Home/CountDown/countchart.json';
import CountUp from 'react-countup';
const CountDown = () => {
    return (
        <div className="flex flex-col px-5 lg:flex-row py-5 bg-slate-50 my-20">
            <div className="flex-1 flex flex-col content-center justify-center">
                <div className="grid grid-cols-2 grid-rows-3">
                    <div className="bg-slate-700 rounded-sm p-10">
                        <CountUp start={0} end={5055} delay={2}>
                            {({ countUpRef }) => (
                                <div className="text-center text-white">
                                    <div className='text-3xl font-extrabold '>
                                    <span ref={countUpRef} />+ 
                                </div>
                                <h2 className="text-2xl italic">Users</h2>
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="bg-slate-700 rounded-sm p-10">
                        <CountUp start={0} end={1111} delay={2}>
                            {({ countUpRef }) => (
                                 <div className="text-center text-white">
                                 <div className='text-3xl font-extrabold '>
                                 <span ref={countUpRef} />+ 
                             </div>
                             <h2 className="text-2xl italic">Classes</h2>
                             </div>
                            )}
                        </CountUp>
                    </div>
                    <div className="bg-slate-700 rounded-sm p-10">
                        <CountUp start={0} end={9999} delay={2}>
                            {({ countUpRef }) => (
                                <div className="text-center text-white">
                                <div className='text-3xl font-extrabold '>
                                <span ref={countUpRef} />+ 
                            </div>
                            <h2 className="text-2xl italic">Enrollment</h2>
                            </div>
                            )}
                        </CountUp>
                    </div>

                </div>
            </div>
            <div className="max-w-screen-sm flex-none">
                <Lottie animationData={countchart} loop={true} />
            </div>
        </div>
    );
};

export default CountDown;