import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useClasses = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, isLoading, data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/classes');
            return res.data;
        }
    })
    // console.log(classes)
    return { isPending, isLoading, classes, refetch }
};

export default useClasses;