import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Images from "./Assets/Images";
import Navbar from "./Components/Navbar";
import Company from "./Components/Company";
import EssentialTools from "./Components/EssentialTools";
import FocusOnWhatMatters from "./Components/FocusOnWhatMatters";
import Testimonials from "./Components/Testimonials";
import FAQS from "./Components/FAQS";
import GetTheBestService from "./Components/GetTheBestService";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="home">
        <Navbar />
        <div className="py-10 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="lg:px-3 2xl:pl-12">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center lg:space-x-3 2xl:space-x-7">
                <div className="md:w-[600px] 2xl:pl-10">
                  <div className="md:pt-12 lg:pt-14 xl:pt-24 2xl:pt-32">
                    <h1 className="text-blue-gray-900 font-roboto font-extrabold text-4xl  lg:text-5xl xl:text-6xl  leading-tight text-center md:text-start"  data-aos="fade-right"
               >
                      Building apps just got easier
                    </h1>
                  </div>
                  <div className="pt-4 lg:pt-4 xl:pt-8 2xl:pt-10">
                    <p className="text-blue-gray-900 font-roboto font-normal text-sm md:text-base lg:text-lg text-center md:text-start "  data-aos="fade-right"
                      data-aos-delay="200">
                      Aliquam vel platea curabitur sit vestibulum egestas sit id
                      lorem. Aliquet neque, dui sed eget scelerisque. Non at at
                      venenatis tortor amet feugiat ullamcorper in. Odio
                      vulputate cras vel lacinia turpis volutpat adipiscing.
                      Sollicitudin at velit, blandit tempus nunc in.
                    </p>
                  </div>
                  <div className="flex items-center space-x-5 md:space-x-3 pt-5 px-5 md:px-2 lg:pt-4 xl:pt-8  2xl:pt-10">
                    <div className="rounded-lg border-2 border-blue-600 bg-blue-600 cursor-pointer "  data-aos="fade-right"
                      data-aos-delay="700">
                      <h3 className="text-white font-inter text-sm font-medium leading-relaxed py-2 px-6">
                        Get started
                      </h3>
                    </div>
                    <div className="flex items-center space-x-3"  data-aos="fade-right"
                      data-aos-delay="300">
                      <div>
                        <img src={Images.play} alt="" width={24} height={24}/>
                      </div>
                      <div>
                        <h4 className="text-blue-600 font-roboto text-base not-italic font-medium  md:text-xl">Watch Video</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left" >
                  <img src={Images.hero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Company/>
      <EssentialTools/>
      <FocusOnWhatMatters/>
      <Testimonials/>
      <FAQS/>
      <GetTheBestService/>
      <Footer/>
    </>
  );
}

export default App;
