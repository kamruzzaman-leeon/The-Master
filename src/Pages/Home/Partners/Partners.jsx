
import microsoft from '../../../assets/Home/Partners/icons8-microsoft.svg'
import hp from '../../../assets/Home/Partners/icons8-hp.svg'
import adobe from '../../../assets/Home/Partners/icons8-adobe.svg'
 import dell from '../../../assets/Home/Partners/icons8-dell.svg'
 import google from '../../../assets/Home/Partners/icons8-google.svg'
 import ibm from '../../../assets/Home/Partners/icons8-ibm.svg'
 import linkedin from '../../../assets/Home/Partners/icons8-linkedin.svg'
 import samsung from '../../../assets/Home/Partners/icons8-samsung.svg'
 import umich from '../../../assets/Home/Partners/umich.png'
 import stanford from '../../../assets/Home/Partners/stanford.png'
 import duke from '../../../assets/Home/Partners/duke.png'

const Partners = () => {
    return (
        <div className='pb-5  bg-slate-50'>
            {/* <h2 className='text-2xl md:text-4xl text-center'>Our Parters</h2> */}
            <p className='font-bold text-2xl text-center text-slate-600 p-10'>Trusted by over <span className='text-blue-600'> 50+ </span> companies and universities with Thousand of learners around the world</p>
            <div className='py-5'>
                <div className='grid grid-cols-3 md:grid-cols-5 justify-center gap-3 place-items-center'>
                    <img className='w-24' src={microsoft} alt="" />
                    <img className='w-24' src={hp} alt="" />
                    <img className='w-24' src={adobe} alt="" />
                    <img className='w-24' src={dell} alt="" />
                    <img className='w-24' src={google} alt="" />
                   <img className='w-24' src={umich} alt="" />
                    <img className='w-24' src={ibm} alt="" />
                    <img className='w-24' src={linkedin} alt="" />
                    <img className='w-24' src={samsung} alt="" />
                    <img className='w-24' src={stanford} alt="" />
                    {/* <img className='w-24' src={duke} alt="" /> */}
                 
                </div>
            </div>
        </div>
    );
};

export default Partners;