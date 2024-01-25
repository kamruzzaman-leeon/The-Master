import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading/Loading";

const SocialLogin = () => {
    const {googleSignIn,loading}=useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            // console.log(result.user);
            const userInfo = {
                email:result.user?.email,
                name: result.user?.displayName,
                image: result.user?.photoURL,
                role:'student',
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                // console.log(res.data);
                navigate('/');
            })
        })
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