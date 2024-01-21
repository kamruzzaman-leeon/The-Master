import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    // const {googleSignIn}=useAuth();
    // const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate()
    const handleGoogleSignIn = () =>{
        // googleSignIn()
        // .then(result=>{
        //     console.log(result.user);
        //     const userInfo = {
        //         email:result.user?.email,
        //         name: result.user?.displayName,
        //     }
        //     axiosPublic.post('/users',userInfo)
        //     .then(res=>{
        //         console.log(res.data);
        //         navigate('/');
        //     })
        // })
    }
    return (
        
        <div className="mx-auto">
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;