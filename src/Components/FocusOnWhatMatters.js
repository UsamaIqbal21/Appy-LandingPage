import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Images from "../Assets/Images";

function FocusOnWhatMatters() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-[#F1F5F9]">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div
              className="flex items-center justify-center space-x-3"
              data-aos="fade-up"
            >
              <div>
                <h3 className="text-blue-gray-900 text-center font-roboto font-bold not-italic leading-tight text-3xl md:text-5xl md:font-extrabold">
                  Focus on what matters
                </h3>
              </div>
            </div>
            <div className="lg:px-12 xl:px-44" data-aos="fade-up">
              <p className="text-blue-gray-900 text-center font-roboto not-italic leading-7 text-lg font-normal">
                Eget at purus mauris euismod metus vitae eget. Diam massa
                venenatis pellentesque facilisis nunc, varius.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center pt-12 lg:pt-24  space-y-4 md:space-x-5">
            <div data-aos="fade-right">
              <img src={Images.focus} alt="" />
            </div>
            <div className="self-start md:w-[600px] lg:pt-16 xl:pt-24 2xl:pt-32">
              <div className="border-l-2 border-[#2563EB]" data-aos="fade-up">
                <div className="pl-2 md:pl-4">
                  <h3 className="text-blue-gray-900 text-start font-roboto not-italic font-medium text-lg lg:text-xl ">
                    Bibendum gravida dolor egestas aliquam
                  </h3>
                </div>
                <div className="pt-3 pl-2  md:pl-4">
                  <p className="text-blue-gray-900 text-start font-roboto not-italic text-base font-normal lg:text-lg">
                    Egestas tincidunt hendrerit nibh platea sit vivamus aenean
                    rhoncus etiam. Tristique amet, sed ac ac dolor habitant.
                    Mauris duis neque molestie venenatis nibh hendrerit
                    pharetra. Tortor suscipit leo sit tellus ac scelerisque
                    gravida sem.
                  </p>
                </div>
              </div>
              <div
                className="border-l-2 border-[#CBD5E1]  mt-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="pl-2 py-2  md:pl-4">
                  <h3 className="text-blue-gray-900 text-start font-roboto not-italic text-lg font-medium lg:text-xl">
                    Egestas lorem eget
                  </h3>
                </div>
              </div>
              <div
                className="border-l-2 border-[#CBD5E1] mt-5"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="pl-2 py-2  md:pl-4">
                  <h3 className="text-blue-gray-900 text-start font-roboto not-italic text-lg font-medium lg:text-xl">
                    Tellus eget feugiat sit
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 pt-12">
            <div
              className="rounded-lg border-2 border-blue-600 bg-blue-600 cursor-pointer "
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <h3 className="text-white font-inter text-sm font-medium leading-relaxed py-2 px-6">
                Get started
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FocusOnWhatMatters;
