import React from "react";
import Images from "../Assets/Images";
function GetTheBestService() {
  return (
    <section className="bg-[#F1F5F9]">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="lg:px-24 2xl:px-32">
            <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-1 2xl:space-x-16">
              <div className="md:w-[600px] lg:w-[550px] xl:w-[570px]">
                <div>
                  <h1
                    className="text-[#0F172A] text-center md:text-start font-roboto not-italic text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold"
                    data-aos="fade-up"
                  >
                    Start now and get the best services
                  </h1>
                </div>
                <div className="pt-4">
                  <p
                    className="text-[#0F172A] text-center md:text-start font-roboto not-italic text-lg font-normal "
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Ac urna elementum purus vulputate tincidunt. Quam maecenas
                    feugiat congue orci, eget tellus pellentesque aliquet. Felis
                    fringilla morbi dui ac consequat risus pharetra odio
                    pulvinar. Id pellentesque in tortor nec nulla cras sapien.
                    Adipiscing nisi tellus quisque aliquet sit risus elementum
                    scelerisque.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start justify-center space-y-6 pt-6">
                  <div
                    className="rounded-lg border-2 border-blue-600 bg-blue-600 cursor-pointer "
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <h3 className="text-white font-inter text-sm font-medium leading-relaxed py-2 px-6">
                      Get started
                    </h3>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <img src={Images.service} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetTheBestService;
