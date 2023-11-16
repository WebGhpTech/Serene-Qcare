import { useEffect } from 'react';
import who1 from "../assets/images/who1.png";
import who2 from "../assets/images/who2.png";
import who3 from "../assets/images/who3.png";

const WhoWeAre = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight;

        if (elementPosition < viewPortHeight) {
          element.classList.add('scroll-animation');
        } else {
          element.classList.remove('scroll-animation');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="who-we-are" className="flex xl:justify-wrap items-center max-xl:flex-col-reverse gap-5 max-container max-sm:mt-60">
      <div className="gap-5 mb-5 md:ml-10 animate-on-scroll">
        <img
          src={who1}
          width={270}
          height={319}
          className="mb-5 animate-on-scroll"
          alt="Who 1"
        />
        <img
          src={who2}
          width={270}
          height={319}
          className="animate-on-scroll"
          alt="Who 2"
        />
      </div>
      <div className="flex flex">
        <img
          src={who3}
          width={270}
          height={355}
          className="animate-on-scroll"
          alt="Who 3"
        />
      </div>
      <div className="lg:ml-40 animate-on-scroll max-sm:pl-7">
      <h3 className="ml-7 h-22 px-4 flex items-center text-sm bg-purple rounded-full w-32 text-primary 
            lg:text-left max-sm:mx-auto max-sm:text-center max-sm:text-center">WHO ARE WE</h3>
        <h2 className="xl:pl-7 mb-5 mt-5 font-inter text-4xl font-bold scroll-animation">
          <span className="text-darkGray">Promoting <span className="text-primary">Equal</span><br /></span>
          <span className="text-primary"><span className="text-primary">Opportunities</span> <span className="text-darkGray">for All</span></span>
        </h2>
        <p className="text-button2 pl-7 font-inter mb-5 scroll-animation max-sm:pl-0">
          At Serene QCare, our mission is to empower individuals with <br />
          conditions and promote inclusivity, accessibility, and equal <br />
          opportunities for all. We strive to create an environment where <br />
          individuals with an impairment can thrive, succeed, and fully <br />
          participate in all aspects of life.
        </p>
        <button className=" bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none xl:ml-8 mb-10 text-white bg-primary flex justify-center items-center gap-2 px-7 py-4 font-inter text-lg leading-none rounded scroll-animation">
          More About Us
        </button>
      </div>
    </section>
  );
};

export default WhoWeAre;
