import Button from "../components/Buttons"
import hero1 from "../assets/images/hero1.png"
import dot1 from "../assets/images/Ellipse 81.png"


const Hero = () => {
  return (
    <section 
    id="home"
    className="w-full flex 
    xl:flex-row flex-col 
    justify-center min-h-screen 
    gap-10 max-container h-[768px]">
    <div className="mb-60 pl-20 relative
      xl:w-2/5 flex flex-col
      justify-center items-start
      w-full max-xl:padding-x pt-28">
      <h1 className="pl-7 mb-5 mt-10
       font-inter text-4xl font-bold
       max-sm:text-[72px] 
       max-sm:leading-[82px]
      ">
      <span className=" text-white">The wise <br/>
      choice for</span> 
      <br/>
      <span className="text-primary">independency</span>
      </h1>
        <p className="pl-7 font-sm font-inter text-slate-gray-100 mb-10">
        We are a disability services provider that was <br/> established with the soul aim of offering support <br/> and always put participants first.
        </p>
        <Button className=""/>
    </div>
    
    <div className="ml-[300px] relative flex-1
      flex justify-center 
      items-center
      
    ">
      <img 
       src={hero1}
       height={700}
       width={506}
       className="obtain-contain 
       relative z-10 rounded-2xl"
      alt="hero carousel"
      />
    
      <div className="mb-40 w-2 h-2 flex sm:gap-2 gap-1 absolute -bottom-[-0.5%]">
       <img
         src={dot1}
       >
       </img>
       <img
         src={dot1}
       >
       </img>
       <img
         src={dot1}
       >
       </img>
       
      </div>
    </div>
    </section>
  )
}

export default Hero