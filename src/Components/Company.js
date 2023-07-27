import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Images from "../Assets/Images";
function Company() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="company" className="bg-gradient-to-b from-F1F5F9 to-transparent">
      <div className="py-28">
        <div className="container mx-auto px-4">
          <div className="2xl:px-20">
            <div className="flex flex-col md:flex-row items-center space-y-14 md:space-y-0 2xl:space-x-14">
              <div
                className="flex flex-col items-center space-y-2 md:w-[394px]"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className="relative inline-block ">
                  <div className="absolute w-[104px] h-[104px] top-[-8px] left-[-10px] right-0 bottom-0 border-2 border-dashed border-red-500 rounded-full z-[-1] "></div>
                  <img src={Images.Icon1} alt="" />
                </div>
                <div>
                  <h3 className="text-blue-gray-900 text-center text-2xl  not-italic font-roboto font-bold leading-tight">
                    Fermentum amet
                  </h3>
                </div>
                <div>
                  <p className="text-blue-gray-900 text-center font-roboto not-italic text-lg font-normal">
                    Pellentesque quis tincidunt sit sed. Tortor massa sed
                    habitant dignissim senectus purus. Consectetur integer id in
                    et pulvinar interdum id.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2  md:w-[394px]"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="relative inline-block ">
                  <div className="absolute w-[104px] h-[104px] top-[-8px] left-0 right-[-10px] bottom-0 border-2 border-dashed border-yellow-500 rounded-full z-[-1] "></div>
                  <img src={Images.Icon2} alt="" />
                </div>
                <div>
                  <h3 className="text-blue-gray-900 text-center text-2xl  not-italic font-roboto font-bold leading-tight">
                    Dignissim quam
                  </h3>
                </div>
                <div>
                  <p className="text-blue-gray-900 text-center font-roboto not-italic text-lg font-normal">
                    Quam sed neque vitae viverra purus venenatis ac non. Eget
                    sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper
                    diam, elit ut non.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2  md:w-[394px]"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="relative inline-block ">
                  <div className="absolute w-[104px] h-[104px] top-0 left-0 right-[-10px] bottom-[-8px] border-2 border-dashed border-blue-500 rounded-full z-[-1] "></div>
                  <img src={Images.Icon3} alt="" />
                </div>
                <div>
                  <h3 className="text-blue-gray-900 text-center text-2xl  not-italic font-roboto font-bold leading-tight">
                    Risus morbi
                  </h3>
                </div>
                <div>
                  <p className="text-blue-gray-900 text-center font-roboto not-italic text-lg font-normal">
                    Euismod sed pellentesque ut elementum. Accumsan gravida
                    turpis ac at. Ullamcorper vitae non est elit odio at augue
                    consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
