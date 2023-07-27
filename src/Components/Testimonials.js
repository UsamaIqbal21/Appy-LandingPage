import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Images from "../Assets/Images";
function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="Testimonails" className="bg-[#F1F5F9]">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="lg:px-24" data-aos="fade-up">
            <style>
              {`
          .swiper-pagination {
            position: static;
            display: flex;
            justify-content: center;
            padding-top: 50px;
            padding-right: 0px;
              }
         `}
            </style>
            <style>
              {`
          .swiper-pagination-bullet {
            background-color: #2563EB;
          }
        `}
            </style>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-16 ">
                  <div>
                    <img src={Images.testimonial} alt="" />
                  </div>
                  <div className="md:w-[528px]">
                    <div>
                      <div>
                        <h3 className="text-[#475569] text-center md:text-start text-xl font-roboto font-bold leading-tight uppercase">
                          Success Stories
                        </h3>
                      </div>
                      <div className="pt-3">
                        <p className="text-[#0F172A] font-roboto text-lg not-italic font-normal text-center md:text-start">
                          <span className="text-[#EAB308] font-roboto text-lg not-italic font-normal">
                            "
                          </span>
                          Id urna, nisl, ut quam. Diam suspendisse fringilla
                          quam arcu mattis est velit in. Nibh in purus sit
                          convallis phasellus ut. At vel erat ultricies commodo.
                          Neque suspendisse a habitasse commodo.
                          <span className="text-[#EF4444] font-roboto text-lg not-italic font-normal">
                            "
                          </span>
                        </p>
                      </div>
                      <div className="pt-3">
                        <h5 className="text-[#0F172A] text-center text-lg font-roboto not-italic font-normal md:text-start">
                          Marie Poirot,
                        </h5>
                        <h4 className="text-[#0F172A] text-center text-xl font-roboto not-italic font-medium md:text-start">
                          Bigapp
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div>
                    <img src={Images.testimonial} alt="" />
                  </div>
                  <div className="md:w-[528px]">
                    <div>
                      <div>
                        <h3 className="text-[#475569] text-center md:text-start text-xl font-roboto font-bold leading-tight uppercase">
                          Success Stories
                        </h3>
                      </div>
                      <div className="pt-3">
                        <p className="text-[#0F172A] font-roboto text-lg not-italic font-normal text-center md:text-start">
                          <span className="text-[#EAB308] font-roboto text-lg not-italic font-normal">
                            "
                          </span>
                          Id urna, nisl, ut quam. Diam suspendisse fringilla
                          quam arcu mattis est velit in. Nibh in purus sit
                          convallis phasellus ut. At vel erat ultricies commodo.
                          Neque suspendisse a habitasse commodo.
                          <span className="text-[#EF4444] font-roboto text-lg not-italic font-normal">
                            "
                          </span>
                        </p>
                      </div>
                      <div className="pt-3">
                        <h5 className="text-[#0F172A] text-center text-lg font-roboto not-italic font-normal md:text-start">
                          Marie Poirot,
                        </h5>
                        <h4 className="text-[#0F172A] text-center text-xl font-roboto not-italic font-medium md:text-start">
                          Bigapp
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div>
                    <img src={Images.testimonial} alt="" />
                  </div>
                  <div className="md:w-[528px]">
                    <div>
                      <div>
                        <h3 className="text-[#475569] text-center md:text-start text-xl font-roboto font-bold leading-tight uppercase">
                          Success Stories
                        </h3>
                      </div>
                      <div className="pt-3">
                        <p className="text-[#0F172A] font-roboto text-lg not-italic font-normal text-center md:text-start">
                          <span className="text-[#EAB308] font-roboto text-lg not-italic font-normal">
                            "
                          </span>
                          Id urna, nisl, ut quam. Diam suspendisse fringilla
                          quam arcu mattis est velit in. Nibh in purus sit
                          convallis phasellus ut. At vel erat ultricies commodo.
                          Neque suspendisse a habitasse commodo.
                          <span className="text-[#EF4444] font-roboto text-lg not-italic font-normal">
                            "
                          </span>
                        </p>
                      </div>
                      <div className="pt-3">
                        <h5 className="text-[#0F172A] text-center text-lg font-roboto not-italic font-normal md:text-start">
                          Marie Poirot,
                        </h5>
                        <h4 className="text-[#0F172A] text-center text-xl font-roboto not-italic font-medium md:text-start">
                          Bigapp
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
