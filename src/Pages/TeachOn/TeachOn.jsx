import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useClasses from '../../hooks/useClasses';
import Loading from '../../components/Loading/Loading'
const TeachOn = () => {
    const { user } = useAuth();
    const [isLoading, classes] = useClasses();
    // console.log('teachon: ', classes)
    if (isLoading) {
        <Loading></Loading>
    }
    const ispending= false;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        // const reqTeacher = {
            
        // }
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
                            {classes.map(item => (
                                <option key={item._id} value={item.category}>
                                    {item.category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button disabled={ispending} className="btn btn-outline text-blue-600">submit for review</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default TeachOn;