import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import Login from '../assets/Login/login.json'
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile, logOut } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("user profile info updated")
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            image:data.photoURL,
                            role:'student',
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    logOut();
                                    Swal.fire({
                                        position: "center",
                                        title: "Successfully User created!",
                                        icon: "success",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/signin');
                                }
                            })
                    }).catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>SignUp | The Master</Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2  my-20">

                <div className="max-w-screen-sm px-5">
                    <Lottie animationData={Login} loop={true} />
                </div>
                <div className="flex-1 flex flex-col content-center justify-center p-5">

                    <div className='mx-auto w-full md:max-w-screen-sm shadow-md'>
                        <h2 className="text-5xl text-center  font-extrabold text-blue-600 my-5">Sign Up now!</h2>
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name?.type === 'required' && <p className='text-red-600'>Name is require</p >}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" {...register("photoURL", { required: true })} className="input input-bordered" />
                                {errors.photoURL?.type === 'required' && <p className='text-red-600'>photoURL is require</p >}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                                {errors.email?.type === 'required' && <p className='text-red-600'>Email is require</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register('password', {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                                    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
                                })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password is require</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 8 character</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than 20 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Minimum eight characters, at least one uppercase letter, one lowercase letter and one number</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='text-center'><small>Already Signed up Here?</small><small className='text-blue-600'> <Link to="/signin">Sign In</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>






        </>
    );
};

export default SignUp;