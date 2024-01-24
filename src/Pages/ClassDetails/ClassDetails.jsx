import { Link, useParams } from 'react-router-dom';
import useClasses from '../../hooks/useClasses';
import Lottie from 'lottie-react';
import Loading from '../../assets/Loading/Loading.json'
const ClassDetails = () => {
    const { id } = useParams();
    // console.log(id)
    const [isLoading,classes] = useClasses();
    if (isLoading) {
        return <>
            {/* <div className='flex justify-center content-center'>
                <span className="loading loading-spinner loading-lg"></span>
            </div> */}
            <div className="max-w-screen-sm">
                <Lottie animationData={Loading} loop={true} />
            </div>
        </>
    }
    const classDetails = classes.find(details => details._id == id);
    //  queryCache.find(queryKey)
    console.log( classDetails)
    const {_id,title:courseName, name, image,description,enrolment,price,category} = classDetails;
    return (
        <div className='my-5'>
            <div className='px-5 flex flex-col justify-center content-center'>
                <div><img src={image} alt={courseName} className='w-full'></img></div>
                <div className=''>
                    <h2 className="text-5xl my-5 font-semibold">{courseName}</h2>
                    <p className='font-bold'>{`${price}$`}</p>
                    <small>Category: {category}</small>                    
                    <p><span>{enrolment}</span> Enrollment </p>
                    <p className='text-sm text-slate-700'>{description}</p>
                    <p className=''>{`instructor: ${name}`}</p>
                    
                    <div className="card-actions justify-center">
                        <div className='text-center'><Link to={`/classdetails/${_id}`}> <button className="btn btn-outline text-blue-600 hover:btn-primary">Pay</button></Link></div>
                    </div>
                </div>
            </div>
            </div>
            );
};

            export default ClassDetails;