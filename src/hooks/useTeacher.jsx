import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTeacher = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isTeacher, isPending: isTeacherLoading}=useQuery({
        queryKey:[user?.email, 'isTeacher'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/teacher/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isTeacher, isTeacherLoading]
};

export default useTeacher;