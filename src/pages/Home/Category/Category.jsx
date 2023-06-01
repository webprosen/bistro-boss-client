import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="pt-10">
            <SectionTitle heading={'Order Online'} subHeading={'From 11:00am to 10:00pm'}></SectionTitle>
            <div className="max-w-7xl mx-auto py-20">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="relative" src={img1} />
                    <h3 className="text-4xl absolute bottom-6 left-6 uppercase text-center text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="relative" src={img2} />
                    <h3 className="text-4xl absolute bottom-6 left-6 uppercase text-center text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="relative" src={img3} />
                    <h3 className="text-4xl absolute bottom-6 left-6 uppercase text-center text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="relative" src={img4} />
                    <h3 className="text-4xl absolute bottom-6 left-6 uppercase text-center text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="relative" src={img5} />
                    <h3 className="text-4xl absolute bottom-6 left-6 uppercase text-center text-white">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
        </section>
    );
};

export default Category;