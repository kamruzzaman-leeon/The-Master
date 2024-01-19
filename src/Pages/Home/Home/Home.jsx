import Banner from "../Banner/Banner";
import CountDown from "../CountDown/CountDown";
import FeedBack from "../FeedBack/FeedBack";
import Partners from "../Partners/Partners";
import { Helmet } from "react-helmet";


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
            <FeedBack></FeedBack>
            <CountDown></CountDown>
        </div>
    );
};

export default Home;