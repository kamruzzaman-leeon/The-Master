import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import MyClassCard from './MyClassCard';
import Loading from '../../../../components/Loading/Loading';

const MyClasses = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: myclasses =[], isLoading, refetch } = useQuery({
        queryKey: ['myclasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes?email=${user.email}`);
            // console.log(res);
            return res.data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(myclasses);
    return (
        <div>
            <div className='flex justify-evenly'>
                {/* <h2 className="text-3xl">My courses</h2> */}
                <h2 className="text-3xl">My Total Courses: {myclasses?.length|| 0}</h2>
            </div>
            <div className=' min-h-screen'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                    {
                        myclasses.map(
                            classitem => <MyClassCard key={classitem._id} refetch={refetch} classitem={classitem}></MyClassCard>

                        )


                    }


                </div>
            </div>
        </div>
    );
};

export default MyClasses;