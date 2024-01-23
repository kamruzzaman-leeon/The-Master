
import CourseCard from '../../components/CourseCard/CourseCard';

import useClasses from '../../hooks/useClasses';

const AllClasses = () => {
    // const axiosPublic = useAxiosPublic()
    // const { data: classes = []} = useQuery({
    //     queryKey: ['classes'],
    //     queryFn: async ()=>{
    //         const res = await axiosPublic.get('/classes');
    //         console.log(res.data)
    //         return res.data;
    //     }
    // })
    const [classes,refetch]=useClasses();
    // console.log(classes)
    return (
        <div className=' min-h-screen'>
            
            <div className='flex justify-evenly'>
                <h2 className="text-3xl">All Classes</h2>
                <h2 className="text-3xl">Total Class: {classes.length}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                {
                    classes.map(
                        classitem=><CourseCard key={classitem._id} classitems={classitem}></CourseCard>
                        
                    )
                    
                    
                }
                
                
            </div>
        </div>
    );
};

export default AllClasses;