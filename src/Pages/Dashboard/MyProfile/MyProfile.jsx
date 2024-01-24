import Loading from '../../../components/Loading/Loading';
import useAuth from '../../../hooks/useAuth';

const MyProfile = () => {
    const { user,loading } = useAuth();
    if (loading) {
        <Loading></Loading>
      }
    console.log(user)
    return (
        <div className=' min-h-screen'>
            <h2 className='text-4xl text-center'>teach on<span className='text-blue-600'>The Master!</span></h2>
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
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Role</span>
                    </label>
                    <p>{role}</p>                  
                </div> */}

            </div>
        </div>
    );
};

export default MyProfile;