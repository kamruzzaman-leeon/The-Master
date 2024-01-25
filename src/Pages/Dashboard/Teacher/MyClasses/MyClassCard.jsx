/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure, { axiosSecure } from '../../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyClassCard = ({ classitem, refetch }) => {
    // console.log('incard', classitem)
    const { _id, title, name, email, image, price, description, status } = classitem;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();



    const onSubmit = async (data) => {
        let imageUrl;

        if (data.image && data.image.length > 0) {
            // New image selected, process the image file
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
    
            if (res.data.success) {
                imageUrl = res.data.data.display_url;
            }
        } else {
            // No new image selected, use the existing image URL
            imageUrl = image;
        }
        
        const classupdateitem = {
            name: data.name,
            email: data.email,
            title: data.title,
            price: parseFloat(data.price),
            image: imageUrl,
            description: data.description,
            status: 'pending',
        };
    
        console.log(classupdateitem);            

        const classres = await axiosSecure.patch(`/classes/teacher/update/${_id}`, classupdateitem);
        if (classres.data.modifiedCount > 0) {                
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${classitem.title} is updated to the class. Please wait for Admin approval`,
                showConfirmButton: false,
                timer: 1500
            });               
        }
        document.getElementById(_id).close(); // Close the modal
        navigate('/dashboard/teacher/myclass');
    }

 

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
        <>
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
                        <div className='text-center' onClick={() => document.getElementById(classitem._id).showModal()}> <button className="btn btn-outline text-green-600 hover:btn-primary">Update</button></div>

                        <div className='text-center'><Link to={''}> <button onClick={() => handleDeleteMyClass(classitem)} className="btn btn-outline text-red-600 hover:btn-primary">Delete</button></Link></div>

                        {status !== 'pending' ? (
                            <div className='text-center'>
                                <Link to={`/dashboard/teacher/myclassdetails/${_id}`}>
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
            {/* MODAL */}
            <dialog id={_id} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>

                    <div className="modal-action">
                        <form className="w-10/12 mx-auto card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Title</span>
                                </label>
                                <input type="text" placeholder="title" defaultValue={classitem.title} {...register('title', { required: true })} className="input input-bordered" />
                                {errors.title?.type === 'required' && <p className='text-red-600'>class title is require</p >}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="number" step="any" placeholder="price" defaultValue={classitem.price} {...register('price', { required: true })} className="input input-bordered" />
                                {errors.price?.type === 'required' && <p className='text-red-600'>price is require</p >}
                            </div>
                            <div className="form-control">
                                <div className="avatar">
                                    <div className="w-20 rounded">
                                        <img src={classitem.image} alt={classitem.title} />
                                    </div>
                                </div>
                                <div className="form-control w-full my-6">
                                    <input  {...register('image')} type="file" className="file-input w-full max-w-xs" />
                                    {/* {errors.image?.type === 'required' && <p className='text-red-600'>Image is require</p >} */}
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="textarea" defaultValue={classitem.description} placeholder="Description" {...register('description', { required: true })} className="input input-bordered" />
                                {errors.price?.type === 'required' && <p className='text-red-600'>Description is require</p >}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input readOnly type="text" placeholder="name" defaultValue={classitem.name} {...register('name', { required: true })} className="input input-bordered" />
                                {/* {errors.title?.type === 'required' && <p className='text-red-600'>class title is require</p >} */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input readOnly type="text" placeholder="email" defaultValue={classitem.email} {...register('email', { required: true })} className="input input-bordered" />
                                {/* {errors.title?.type === 'required' && <p className='text-red-600'>class title is require</p >} */}
                            </div>

                            <div className="form-control text-center my-5 gap-2">
                    <button type="submit" className="btn btn-outline w-1/2 mx-auto text-blue-600">Update</button>
                    <button type="button" className="btn btn-outline w-1/2 mx-auto text-red-600" onClick={() => document.getElementById(_id).close()}>Close</button>
                </div>
                        </form>                                
                    </div>
                    
                </div>
            </dialog>
        </>
    );
};

export default MyClassCard;