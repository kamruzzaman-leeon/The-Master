import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddClass = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const classitem = {
                name: user?.displayName,
                email: user?.email,
                title: data.title,
                price: parseFloat(data.price),
                description: data.description,
                image: res.data.data.display_url,
                // category: data.category,
                status: 'pending',
            }
            // console.log(classitem)

            const classRes = await axiosSecure.post('teacher/addclass', classitem);
            if (classRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${classitem.title} is added to the class.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/teacher/myclass');
            }
        }
        // console.log('with image url', res.data);
    }



    return (
        <div className=' min-h-screen'>
            <h2 className='text-4xl text-center'>Add class on <span className='text-blue-600'>The Master!</span></h2>
            <div className='mx-auto md:max-w-screen-md shadow-md'>

                <form className="w-10/12 mx-auto card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Title</span>
                        </label>
                        <input type="text" placeholder="title" {...register('title', { required: true })} className="input input-bordered" />
                        {errors.title?.type === 'required' && <p className='text-red-600'>class title is require</p >}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" step="any" placeholder="price" {...register('price', { required: true })} className="input input-bordered" />
                        {errors.price?.type === 'required' && <p className='text-red-600'>price is require</p >}
                    </div>
                    <div className="form-control">
                    
                        <div className="form-control w-full my-6">
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                            {errors.title?.type === 'required' && <p className='text-red-600'>Image is require</p >}
                        </div>
                       
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="textarea" placeholder="Description" {...register('description', { required: true })} className="input input-bordered" />
                        {errors.price?.type === 'required' && <p className='text-red-600'>Description is require</p >}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <p>{user?.displayName}</p>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <p>{user?.email}</p>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-outline text-blue-600">submit for review</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClass;