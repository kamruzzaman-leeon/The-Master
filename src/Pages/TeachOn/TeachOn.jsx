import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const TeachOn = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit= data =>{
        console.log(data);
    }
    return (
        <div className=' min-h-screen'>
            <h2 className='text-4xl text-center'>teach on<span className='text-blue-600'>The Master!</span></h2>
            <div className='mx-auto w-full md:max-w-screen-sm shadow-md'>
                        <h2 className="text-5xl text-center  font-extrabold text-blue-600 my-5">Sign In Now!</h2>
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" defaultValue={user.displayname} readOnly {...register('name')} className="input input-bordered" />
                            
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <img src={user.photoURL}></img>                               
                               
                            </div>
                           
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">submit</button>
                            </div>
                            
                        </form>
                    </div>
        </div>
    );
};

export default TeachOn;