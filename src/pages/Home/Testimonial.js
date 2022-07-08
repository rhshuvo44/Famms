import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import client from "../../images/client.jpg";
const Testimonial = () => {
  return (
    <div className="p-16">
      <h1 className="text-center font-bold text-xl md:text-6xl capitalize">
        Customer's Testimonial
      </h1>
      <hr className="drive" />
      <Swiper
        navigation={true}
        modules={[Navigation]}
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
        className="swiper"
      >
        <SwiperSlide>
          <div class="card w-full md:w-3/4 m-auto">
            <figure className="mt-8">
              <div class="avatar">
                <div class="w-40 h-40 rounded-full">
                  <img src={client} alt="Shoes" />
                </div>
              </div>
            </figure>
            <div class="">
              <h2 class="text-center font-bold sm:text-2xl mt-10 md:text-3xl">
                Anna Trevor
              </h2>
              <h2
                style={{ color: "#999998" }}
                class="text-center font-bold text-2xl"
              >
                Customer
              </h2>
              <p className="mt-5">
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis,
                debitis totam est deserunt eius officiis ipsum ducimus ad labore
                modi voluptatibus accusantium sapiente nam! Quaerat.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card sm:w-full md:w-3/4 m-auto">
            <figure className="mt-8">
              <div class="avatar">
                <div class="w-40 h-40 rounded-full">
                  <img src={client} alt="Shoes" />
                </div>
              </div>
            </figure>
            <div class="">
              <h2 class="text-center font-bold sm:text-2xl md:text-3xl mt-10">
                Anna Trevor
              </h2>
              <h2
                style={{ color: "#999998" }}
                class="text-center font-bold text-2xl"
              >
                Customer
              </h2>
              <p className="mt-5">
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis,
                debitis totam est deserunt eius officiis ipsum ducimus ad labore
                modi voluptatibus accusantium sapiente nam! Quaerat.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card sm:w-full md:w-3/4 m-auto">
            <figure className="mt-8">
              <div class="avatar">
                <div class="w-40 h-40 rounded-full">
                  <img src={client} alt="Shoes" />
                </div>
              </div>
            </figure>
            <div class="">
              <h2 class="text-center font-bold sm:text-2xl md:text-3xl mt-10">
                Anna Trevor
              </h2>
              <h2
                style={{ color: "#999998" }}
                class="text-center font-bold text-2xl"
              >
                Customer
              </h2>
              <p className="mt-5">
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis,
                debitis totam est deserunt eius officiis ipsum ducimus ad labore
                modi voluptatibus accusantium sapiente nam! Quaerat.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
