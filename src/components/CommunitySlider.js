import React from "react";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={"auto"}
      grabCursor={true}
      modules={[]}
    >
      {testimonials.map((testimonial, i) => {
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide key={i}>
            <div className="relative">
              <div>
                <img src={image}></img>
              </div>
              <div className="absolute bottom-[30px] text-white p-[20px] text-center">
                <p className="mb-8 italic text-lg font-light">{message}</p>
                <div className="flex items-center justify-center gap-x-[3px]">
                  <span className="text-[30px] text-primary-200 font-bold">
                    ~
                  </span>
                  <h3 className="text-[20px] text-white">{name}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
