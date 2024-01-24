import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useClasses = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/classes');
            return res.data;
        }
    })
    return [isPending, classes, refetch]
};

export default useClasses;