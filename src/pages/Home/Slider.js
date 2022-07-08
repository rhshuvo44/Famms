import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const slider = () => {
  return (
    <div className="slider">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div class="hero h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <div className="w-2/4"></div>
              <div className="slider-info px-8 md:px-20">
                <h1 class="text-6xl md:text-7xl text-accent font-bold">
                  <span className="text-primary mb-10"> Sale 20% Off</span>{" "}
                  <br /> On Everything{" "}
                </h1>
                <p class="py-6  w-2/3">
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <button class="common-btn btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <div className="w-2/4"></div>
              <div className="slider-info px-8 md:px-20">
                <h1 class="text-6xl md:text-7xl text-accent font-bold">
                  <span className="text-primary"> Sale 20% Off</span> <br /> On
                  Everything{" "}
                </h1>
                <p class="py-6  w-2/3">
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <button class="common-btn btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <div className="w-2/4"></div>
              <div className="slider-info px-8 md:px-20">
                <h1 class="text-6xl md:text-7xl text-accent font-bold">
                  <span className="text-primary mb-10"> Sale 20% Off</span>{" "}
                  <br /> On Everything{" "}
                </h1>
                <p class="py-6  w-2/3">
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <button class="common-btn btn-primary">Shop now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default slider;
