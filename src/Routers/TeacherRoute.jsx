/* eslint-disable react/prop-types */
import React from 'react';
import useAuth from '../hooks/useAuth';
import useTeacher from '../hooks/useTeacher';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const TeacherRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isTeacher,isTeacherLoading]=useTeacher();
    const location = useLocation();
    if(loading || isTeacherLoading){
        <Loading></Loading>
    }
    if(user && isTeacher){
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
};

export default TeacherRoute;