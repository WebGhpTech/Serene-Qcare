import { useState, useEffect } from 'react';
import Button from '../components/Buttons';
import hero1 from '../assets/images/sqc-hero-01.webp';
import hero2 from '../assets/images/sqc-hero-02.webp';
import hero3 from '../assets/images/sqc-hero-03.webp';
import hero4 from '../assets/images/sqc-hero-04.webp';
import hero5 from '../assets/images/sqc-hero-05.webp';
import dot1 from '../assets/images/Ellipse 81.png';
import dot2 from '../assets/images/Ellipse 82.png';

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4, hero5];
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  const changeSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full flex flex-col md:flex-row min-h-screen gap-10 max-container h-[100vh] justify-center items-center pt-20 md:pt-0">
      <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-start pl-10 lg:pl-20 pt-10 order-1 max-sm:mt-60">
        <h1 className="pl-7 mb-5 font-inter text-3xl md:text-[60px] md:leading-[68px] font-bold max-sm:text-[48px] max-sm:leading-[58px] max-sm:pl-9 max-sm:text-center ease-in-text">
          <span className="sm:mt-20 text-white">The wise <br />choice for</span>
          <br />
          <span className="text-primary animated-text">independency</span>
        </h1>
        <p className="pl-7 font-sm font-inter text-slate-gray-100 mb-10 max-sm:text-center max-sm:pr-20 ease-in-text">
          We are a disability services provider that was established with the sole aim of offering support and always putting participants first.
        </p>
        <Button />
      </div>

      <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center order-2">
        <img
          src={images[activeIndex]}
          className="md:rounded-2xl object-contain carousel-slide m-10"
          alt="hero carousel"
          style={{ transition: 'opacity 2s ease-in-out' }}
        />

        <div className="w-full flex justify-center">
          {images.map((_, index) => (
            <img
              key={index}
              src={index === activeIndex ? dot1 : dot2}
              alt={`dot${index}`}
              onClick={() => changeSlide(index)}
              className={`mx-2 ${index === activeIndex ? "active-dot" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
