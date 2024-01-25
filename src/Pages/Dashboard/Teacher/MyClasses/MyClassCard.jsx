/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { axiosSecure } from '../../../../hooks/useAxiosSecure';

const MyClassCard = ({ classitem, refetch }) => {
    // console.log('incard', classitem)
    const { _id, title, name, email, image, price, description, status } = classitem;

    const handleDeleteMyClass = (classitem) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/classes/${classitem._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${classitem.title} has been deleted.`,
                                icon: "success"
                            });

                        }
                    }
                    )

            }
        });
    }

    return (
        <div className="card w-auto shadow-md rounded-none font-serif">
            <figure >
                <img src={image} alt={title} />
            </figure>
            <p className='bg-blue-600 absolute right-0 mr-4 mt-4 text-white p-1 rounded-sm'>{price}</p>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p className=' '><small>{description}</small></p>
                <p className=''><span className="label-text">instructor:</span>{name}</p>
                <p className=''><span className="label-text">email: </span>{email}</p>
                <div className="card-actions justify-center">
                    {/* update,delete,see details*/}
                    <div className='text-center'><Link to={''}> <button className="btn btn-outline text-green-600 hover:btn-primary">Update</button></Link></div>
                    <div className='text-center'><Link to={''}> <button onClick={() => handleDeleteMyClass(classitem)} className="btn btn-outline text-red-600 hover:btn-primary">Delete</button></Link></div>
                    {status !== 'pending' ? (
                        <div className='text-center'>
                            <Link to={`teacher/myclassdetails/${_id}`}>
                                <button
                                    className="btn btn-outline text-blue-600 hover:btn-primary"
                                >
                                    See details
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className='text-center'>
                            <button
                                className="btn btn-outline bg-gray-300 cursor-not-allowed"
                                disabled={true}
                            >
                                See details
                            </button>
                        </div>
                    )}


                </div>

            </div>
        </div>
    );
};

export default MyClassCard;