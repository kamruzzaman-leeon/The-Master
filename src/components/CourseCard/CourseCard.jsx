import React from 'react';

const CourseCard = () => {
    const image = 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
    const handleEnroll = () =>{

    }
    return (
        <div className="my-5 card w-auto shadow-xl rounded-none">
        <figure >
          <img src={image} alt={'title'} />
        </figure>
        <p className='bg-blue-600 absolute right-0 mr-4 mt-4 text-white p-1 rounded-sm'>{'price'}</p>
        <div className="card-body">
          <h2 className="card-title">{'title'}</h2>
          <p><span>{'totalenrollment'}</span> Enrollment </p>
          <p >{'description'}</p>
          <p className=''>{`instructor: ${'instructor'}`}</p>
          <div className="card-actions justify-center">
            
            <button onClick={handleEnroll} className="btn btn-outline text-blue-600 hover:btn-primary">Enroll</button>
          </div>
        </div>
      </div>
    );
};

export default CourseCard;