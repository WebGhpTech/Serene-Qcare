import { useState, useEffect } from 'react';
import Button from '../components/Buttons';
import hero1 from '../assets/images/hero1.png';
// import hero2 from '../assets/images/hero2.png'; // Add more images as needed
import dot1 from '../assets/images/Ellipse 81.png';
import dot2 from '../assets/images/Ellipse 82.png';

const Hero = () => {

  // const images = [hero1, hero2];
  const images = [hero1];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
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
    <section className="w-full flex flex-col md:flex-row min-h-screen gap-10 max-container h-[768px] justify-center items-center">
      <div className="w-full md:w-1/2 relative flex flex-col justify-center items-start pl-20 pt-10 order-2 md:order-1">
        <h1 className="pl-7 mb-5 font-inter text-4xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="text-white">The Wise <br />Choice for</span>
          <br />
          <span className="text-primary">Independency</span>
        </h1>
        <p className="pl-7 font-sm font-inter text-slate-gray-100 mb-10">
          We are a disability services provider that was established with the sole aim of offering support and always putting participants first.
        </p>
        <Button className="" />
      </div>

      <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center order-1 md:order-2">
        <img
          src={images[activeIndex]}
          className="object-contain h-[60vh] w-full md:w-auto rounded-2xl carousel-slide"
          alt="hero carousel"
        />

        <div className="w-full flex justify-center mt-4">
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
