import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading/Loading';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const MyProfile = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data } = useQuery({
        queryKey: ['userdb'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user.email}`);
            // console.log(res.data)
            return res.data;
        }
    })
    // const [users]= useUsers();
    // const isAdmin = useAdmin();
    // console.log(user)
    // const isTeacher = false;
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className=' min-h-screen'>
            <h2 className='text-4xl text-center'>Welcome to <span className='text-blue-600'>The Master!</span></h2>
            <div className='text-center mx-auto p-5 md:max-w-screen-md shadow-md'>


                <div className="avatar mx-auto">
                    <div className="w-24 rounded">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div>
                    <span className="label-text">Name</span>
                    <p>{user?.displayName}</p>
                </div>
                <div>
                    <span className="label-text">Email</span>
                    <p>{user?.email}</p>
                </div>
                <div>
                    <span className="label-text">Phone</span>
                    <p>{user?.phoneNumber || 'null'}</p>
                </div>
                <div>
                    <span className="label-text">Role</span>
                    <p>{data?.role || 'student'}</p>
                </div>

            </div>
        </div >
    );
};

export default MyProfile;