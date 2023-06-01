import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState } from "react";
import { useEffect } from "react";
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    return (
        <section className="pt-10">
            <SectionTitle heading={'Testimonials'} subHeading="What Our Clients Say"></SectionTitle>
            <div className="max-w-7xl mx-auto py-20">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="px-20">
                                <Rating style={{ maxWidth: 150, margin: 'auto', marginBottom: '15px' }} value={review.rating} readOnly/>
                                <div className="mb-4">{review.details}</div>
                                <div className="text-3xl text-orange-500">{review.name}</div>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;