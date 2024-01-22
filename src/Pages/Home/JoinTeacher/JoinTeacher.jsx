import teacher from '../../../assets/Home/Teacher/teacher.json'
import Lottie from 'lottie-react';
const JoinTeacher = () => {
    return (
        <div className="flex flex-col bg-slate-50 px-5 md:flex-row pb-5 my-20">
            <div className="max-w-screen-sm">
          <Lottie animationData={teacher} loop={true} />
          </div>
        <div className="flex-1 flex flex-col content-center justify-center">
          <h2 className="text-5xl text-center md:text-left font-extrabold w-full md:max-w-sm text-blue-600">Become An Instructor</h2>
          <p className="py-5 text-center md:text-left min-w-md text-slate-700">On The Master, instructors from all around the world teach a large number of students. We give you the tools and skills you need to teach your passion.</p>
          <div className="flex flex-col md:flex-row content-around gap-3">
          
          <button className="btn btn-outline text-blue-600 lg:text-lg ">Teaching Start Today</button>
             

          </div>
        </div>
          
      </div>
    );
};

export default JoinTeacher;