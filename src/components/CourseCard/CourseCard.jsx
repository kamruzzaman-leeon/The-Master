/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({classitems}) => {
  const {_id,title:courseName, name, image,description,enrolment,price,category} = classitems;
    
    return (
        <div className="card w-auto shadow-md rounded-none">
        <figure >
          <img src={image} alt={courseName} />
        </figure>
        <p className='bg-blue-600 absolute right-0 mr-4 mt-4 text-white p-1 rounded-sm'>{price}</p>
        <div className="card-body h-96">
          <h2 className="card-title">{courseName}</h2>
          <p><span>{enrolment}</span> Enrollment </p>
          <p className='text-sm from-neutral-200'>{description}</p>
          <p className=''>{`instructor: ${name}`}</p>
          <div className="card-actions justify-center">
          <div className='text-center'><Link to={`/classdetails/${_id}`}> <button className="btn btn-outline text-blue-600 hover:btn-primary">Enroll</button></Link></div>
            
          </div>
        </div>
      </div>
    );
};

export default CourseCard;