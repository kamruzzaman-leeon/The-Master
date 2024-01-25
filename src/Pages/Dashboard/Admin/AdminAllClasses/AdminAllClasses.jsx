import React from 'react';
import useClasses from '../../../../hooks/useClasses';
import { axiosSecure } from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Loading from '../../../../components/Loading/Loading'
import { Link } from 'react-router-dom';
const AdminAllClasses = () => {
    const { isPending, classes, refetch } = useClasses();
    if(isPending){
        return <Loading></Loading>
    }
    const handleClass = async (classitem, status) => {
        // Handle class action (approve, reject)
        axiosSecure.patch(`classes/admin/${classitem._id}`,{status})
        .then(res=>{
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    title: "Status Updated!",
                    text: `${classitem.title} is Available now!`,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                
            }
        })
    };

    console.log(classes);

    return (
        <div className="min-h-screen">
            <div className="flex justify-evenly">
                <h2 className="text-3xl">Teacher List</h2>
                <h2 className="text-3xl">Total Classes: {classes.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>See Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classitem, index) => (
                            <tr key={classitem._id}>
                                <td>{index + 1}</td>
                                <td>{classitem.title}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-20 rounded">
                                            <img src={classitem.image} alt={classitem.title} />
                                        </div>
                                    </div>
                                </td>
                                <td>{classitem.email}</td>
                                <td>{classitem.description}</td>
                                <td>{classitem.status}</td>
                                <td>
                                    {classitem.status === 'pending' ? (
                                        <>
                                            <button
                                                disabled={classitem.status !== 'pending'}
                                                onClick={() => handleClass(classitem, 'approve')}
                                                className="btn  m-1 bg-green-500 text-white"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                disabled={classitem.status !== 'pending'}
                                                onClick={() => handleClass(classitem, 'reject')}
                                                className="btn  m-1 bg-red-500 text-white"
                                            >
                                                Reject
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button disabled={true} className="btn  m-1  bg-green-500 text-white">
                                                Approved
                                            </button>
                                            <button disabled={true} className="btn  m-1 bg-red-500 text-white">
                                                Rejected
                                            </button>
                                        </>
                                    )}
                                </td>
                                <td>
                                {classitem.status === 'approve' ? (
                                        <>
                                        <Link to={`/dashboard/progress/${classitem._id}`}>
                                        <button
                                                disabled={classitem.status !== 'approve'}
                                                className="btn  m-1 bg-green-500 text-white"
                                            >
                                                see Progress
                                            </button>
                                        </Link>
                                            
                                           
                                        </>
                                    ) : (
                                        <>
                                            <button disabled={true} className="btn btn-info">
                                               see Progress
                                            </button>
                                            
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminAllClasses;
