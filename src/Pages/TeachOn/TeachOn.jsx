import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useClasses from '../../hooks/useClasses';
import Loading from '../../components/Loading/Loading'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const TeachOn = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const {isLoading, classes} = useClasses();
    // console.log('teachon: ', classes)
    if (isLoading) {
        <Loading></Loading>
    }
    
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        // console.log(data);
        const teacherinfo = {
            // teacherid: user?._id,
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            experience: data.experience,
            category: data.category,
            status:'pending',
        }
        console.log(teacherinfo);
        const reqteach = await axiosSecure.post('/teachers', teacherinfo);
        console.log(reqteach);
        if(reqteach.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Request Send for the Admin review`,
                showConfirmButton: false,
                timer: 1500
              });
        }else{
            Swal.fire({
                icon: "question",
                title: `Please wait for Admin review`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        
        
    }
    return (
        <div className=' min-h-screen'>
            <h2 className='text-4xl text-center'>teach on<span className='text-blue-600'>The Master!</span></h2>
            <div className='mx-auto md:max-w-screen-md shadow-md'>

                <form className="w-10/12 mx-auto card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="avatar mx-auto">
                        <div className="w-24 rounded">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <p>{user?.displayName}</p>
                       

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Experience Level</span>
                        </label>
                        <select {...register('experience',{required:true})}>
                        {/* <option defaultValue="">Select the Level</option> */}
                            <option value={'beginner'}>Beginner</option>
                            <option value={'experienced'}>Experienced</option>
                            <option value={'someidea'}>Some Idea</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select {...register('category',{required:true})}>
                        {/* <option defaultValue="">Select a category</option> */}
                            <option value={'Digital Marketing'}>Digital Marketing</option>
                            <option value={'Graphic Design'}>Graphic Design</option>
                            <option value={'Web Development'}>Web Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Blockchain and Cryptocurrency">Blockchain and Cryptocurrency</option>
                            <option value="Cloud Computing">Cloud Computing</option>
                            
                            {/* {classes.map(item => (
                                <option key={item._id} value={item.category}>
                                    {item.category}
                                </option>
                            ))} */}
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-outline text-blue-600">submit for review</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default TeachOn;