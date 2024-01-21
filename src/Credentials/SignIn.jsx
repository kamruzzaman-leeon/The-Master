import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet';
import SocialLogin from './SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import Login from '../assets/Login/login.json'
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
const SignIn = () => {
    //     const { signIn, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log('state in the location', location.state)
    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Successfully Login!",
                    showClass: {
                        popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                    },
                    hideClass: {
                        popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
                    }
                });
                e.target.reset();
                navigate(from, { replace: true })
            })

    }
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }

    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <>
            <Helmet>SignIn | The Master</Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2  my-20">

                <div className="max-w-screen-sm px-5">
                    <Lottie animationData={Login} loop={true} />
                </div>
                <div className="flex-1 flex flex-col content-center justify-center p-5">

                    <div className='mx-auto w-full md:max-w-screen-sm shadow-md'>
                        <h2 className="text-5xl text-center  font-extrabold text-blue-600 my-5">Login now!</h2>
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name='captcha' ref={captchaRef} placeholder='captcha' className="input input-bordered" required />
                                <button className='btn btn-outline btn-sm mt-2'>Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center'><small>New Here?</small><small className='text-blue-600'> <Link to="/signup">Sign Up</Link></small></p>
                            <div className="divider">Login With</div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>






        </>
    );
};

export default SignIn;