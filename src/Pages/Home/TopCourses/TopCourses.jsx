import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import CourseCard from '../../../components/CourseCard/CourseCard';

const TopCourses = () => {
    return (
        <div className='mx-5 my-10'>
            <h2 className='text-center font-bold text-4xl py-8'>Our Top enrollment courses</h2>
            <p className='font-bold text-xl mx-5 text-center text-slate-600'>Explore free online courses from the world's top universities and companies.</p>
            
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 50,
                        },
                      }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                     <SwiperSlide><CourseCard></CourseCard></SwiperSlide>
                     <SwiperSlide><CourseCard></CourseCard></SwiperSlide>
                     <SwiperSlide><CourseCard></CourseCard></SwiperSlide>
                     <SwiperSlide><CourseCard></CourseCard></SwiperSlide>
                     <SwiperSlide><CourseCard></CourseCard></SwiperSlide>
                     <SwiperSlide><CourseCard></CourseCard></SwiperSlide>
                    
                   
                </Swiper>
          
        </div>

    );
};

export default TopCourses;