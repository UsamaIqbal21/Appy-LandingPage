import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Images from "../Assets/Images";
function EssentialTools() {
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
                  All the essential tools
                </h3>
              </div>
            </div>
            <div className="lg:px-12 xl:px-44" data-aos="fade-up">
              <p className="text-blue-gray-900 text-center font-roboto not-italic leading-7 text-lg font-normal">
                Odio vulputate cras vel lacinia turpis volutpat adipiscing.
                Sollicitudin at velit, blandit tempus nunc in.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center pt-12 lg:pt-24  space-y-4 md:space-x-5">
            <div data-aos="fade-right">
              <img src={Images.tools} alt="" />
            </div>
            <div className="self-start md:w-[600px] lg:pt-16 xl:pt-24 2xl:pt-32">
              <div className="border-l-2 border-[#2563EB]"  data-aos="fade-up">
                <div className="pl-2 md:pl-4">
                  <h3 className="text-blue-gray-900 text-start font-roboto not-italic font-medium text-lg lg:text-xl ">
                    Sem augue tempus
                  </h3>
                </div>
                <div className="pt-3 pl-2  md:pl-4">
                  <p className="text-blue-gray-900 text-start font-roboto not-italic text-base font-normal lg:text-lg">
                    Venenatis blandit habitasse nunc, sapien enim elit in. Arcu,
                    pharetra, et cursus sit senectus in blandit. Aliquet enim
                    fermentum non semper n ibh ut neque. Pellentesque ut
                    tincidunt vitae arcu bibendum malesuada lorem sapien
                    volutpat.
                  </p>
                </div>
              </div>
              <div className="border-l-2 border-[#CBD5E1]  mt-5"  data-aos="fade-up"  data-aos-delay="300">
                <div className="pl-2 py-2  md:pl-4">
                  <h3 className="text-blue-gray-900 text-start font-roboto not-italic text-lg font-medium lg:text-xl">
                    Habitant integer interdum a
                  </h3>
                </div>
              </div>
              <div className="border-l-2 border-[#CBD5E1] mt-5"  data-aos="fade-up"  data-aos-delay="500">
                <div className="pl-2 py-2  md:pl-4">
                  <h3 className="text-blue-gray-900 text-start font-roboto not-italic text-lg font-medium lg:text-xl">
                    Tempus natoque id
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EssentialTools;
