
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
const FeedBack = () => {
    const reviews = [
        {
            "_id": "643010e0f5a7e52ce1e8fa65",
            "name": "Jane Doe",
            "title": "AWS Certified Cloud Practitioner",
            "details": "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
            "rating": 3
        },
        {
            "_id": "643010f9f5a7e52ce1e8fa66",
            "name": "John Doe",
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
            "rating": 2
        },
        {
            "_id": "6430110af5a7e52ce1e8fa67",
            "name": "MJ Doe",
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
            "rating": 5
        },
        {
            "_id": "64301123f5a7e52ce1e8fa68",
            "name": "Sarah Smith",
            "details": "I found the product to be incredibly useful and easy to use. The interface is intuitive, and it has all the features I need. Highly recommend it!",
            "rating": 4
        },
        {
            "_id": "6430113af5a7e52ce1e8fa69",
            "name": "Robert Johnson",
            "details": "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
            "rating": 5
        }
    ]
    return (
        <div className='my-20'>
            <h2 className='text-center font-bold text-4xl w-10/12 mx-auto py-8'>Why Students Love <span className='text-blue-600'>The Master</span></h2>
            <p className='font-bold text-xl mx-5 text-center text-slate-600'>Whether it's a first brush on canvas or the last frame in an animation, Skillshare is here to support you on every step of your creative journey.</p>
            <Swiper
                pagination={{
                dynamicBullets: true,
                clickable: true,
                }} 
                navigation={true}
                slidesPerView={'auto'}
                modules={[Navigation, Pagination]} className="mySwiper">
                {
                    reviews?.map(review => <SwiperSlide key={review._id}>
                        <div className='m-10 flex flex-col items-center'>
                            <h3 className='text-2xl text-center font-bold'>{review.title}</h3>
                            <p className='py-8 italic w-10/12 text-center'>{`"${review.details}"`}</p>
                            <div className="avatar">
                                <div className="w-12 rounded">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <h3 className=' text-2xl text-center'>{review.name}</h3>



                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default FeedBack;