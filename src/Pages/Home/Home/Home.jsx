import Banner from "../Banner/Banner";
import CountDown from "../CountDown/CountDown";
import FeedBack from "../FeedBack/FeedBack";
import JoinTeacher from "../JoinTeacher/JoinTeacher";
import Partners from "../Partners/Partners";
import { Helmet } from "react-helmet";
import TopCourses from "../TopCourses/TopCourses";


const Home = () => {
    <Helmet>
        <title>Home | The Master</title>
    </Helmet>
    return (
        <div>
            <Helmet>
                <title>Home | The Master</title>
            </Helmet>
            <Banner></Banner>
            <Partners></Partners>
            <TopCourses></TopCourses>
            <CountDown></CountDown>
            <FeedBack></FeedBack>
            <JoinTeacher></JoinTeacher>
        </div>
    );
};

export default Home;