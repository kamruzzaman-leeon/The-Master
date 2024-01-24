import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const TeacherReq = () => {
    const axiosSecure = useAxiosSecure();
    const { data: teachers = [], refetch } = useQuery({
        queryKey: ['teacher'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/teachers`);
            console.log(res.data);
            return res.data;
        }
    })

    const handleTeacher = async (teacher, status) => {
        const { _id,email } = teacher
        axiosSecure.patch(`/users/teacher/${_id}`, { status,email })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        title: "Status Updated!",
                        // text: `${teacher.name} is Teacher now!`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            }
            )
    }



    return (
        <div className='min-h-screen'>

            <div className='flex justify-evenly'>
                <h2 className="text-3xl">All Teacher req</h2>
                <h2 className="text-3xl">Total Teacher Request: {teachers.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Experience</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers.map((teacher, index) => <tr key={teacher._id}>
                                <th>{index + 1}</th>
                                <td>{teacher.name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-8 rounded">
                                            <img src={teacher.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{teacher.experience}</td>
                                <td>{teacher.category}</td>
                                <td>{teacher.status}</td>
                                <td>
                                    {
                                        teacher.status === 'pending' ? (
                                            <>
                                                <button
                                                    disabled={teacher.status !== 'pending'}
                                                    onClick={() => handleTeacher(teacher, 'approve')}
                                                    className="btn btn-sm bg-green-500 text-white"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    disabled={teacher.status !== 'pending'}
                                                    onClick={() => handleTeacher(teacher, 'reject')}
                                                    className="btn btn-sm bg-red-500 text-white"
                                                >
                                                    Reject
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button disabled={true} className="btn btn-sm bg-green-500 text-white">
                                                    Approved
                                                </button>
                                                <button disabled={true} className="btn btn-sm bg-red-500 text-white">
                                                    Rejected
                                                </button>
                                            </>
                                        )
                                    }
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherReq;