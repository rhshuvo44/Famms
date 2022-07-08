import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

const slider = () => {
  return (
    <div className="slider">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="w-2/4"></div>
              <div className="slider-info px-8 md:px-20">
                <h1 className="text-6xl md:text-7xl text-accent font-bold">
                  <span className="text-primary mb-10"> Sale 20% Off</span>{" "}
                  <br /> On Everything{" "}
                </h1>
                <p className="py-6  w-2/3">
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <button className="common-btn btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="w-2/4"></div>
              <div className="slider-info px-8 md:px-20">
                <h1 className="text-6xl md:text-7xl text-accent font-bold">
                  <span className="text-primary"> Sale 20% Off</span> <br /> On
                  Everything{" "}
                </h1>
                <p className="py-6  w-2/3">
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <button className="common-btn btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="w-2/4"></div>
              <div className="slider-info px-8 md:px-20">
                <h1 className="text-6xl md:text-7xl text-accent font-bold">
                  <span className="text-primary mb-10"> Sale 20% Off</span>{" "}
                  <br /> On Everything{" "}
                </h1>
                <p className="py-6  w-2/3">
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <button className="common-btn btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default slider;
