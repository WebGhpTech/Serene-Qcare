import who1 from "../assets/images/who1.png"
import who2 from "../assets/images/who2.png"
import who3 from "../assets/images/who3.png"

const WhoWeAre = () => {
  return (
    <section id="who-we-are"
    className="flex justify-wrap
    items-center max-xl:flex-col-reverse
    gap-5 max-container ">
    <div className="gap-5 mb-5 ml-10" >
        <img 
         src={who1}
         width={270}
         height={319}
         className="mb-5"
        ></img>
        <img 
         src={who2}
         width={270}
         height={319}
        ></img>
    </div>
    <div className="flex flex">
        <img 
         src={who3}
         width={270}
         height={319}
        ></img>
    </div>

    <div className="ml-40">
    <h3 className="flex-auto ml-8 h-22 pl-3 items-center font-12 bg-purple rounded-full w-32 text-primary">WHO WE ARE</h3>
    <h2 className="pl-7 mb-5 mt-5
    font-inter text-4xl font-bold
    max-sm:text-[72px] 
    max-sm:leading-[82]
   ">
   
   <span className=" text-darkGray">Promoting <span className="text-primary">Equal</span><br/></span> 
   <span className="text-primary"><span className="text-primary">Opportunities</span> <span className=" text-darkGray">for All</span></span>
   </h2>
     <p className="text-button2 pl-7 font-inter mb-5">
     At Serene QCare, our mission is to empower individuals with <br/> 
     conditions and promote inclusivity, accessibility, and equal 
     <br/> opportunities for all. We strive to create an environment where <br/> 
     individuals with an impairment can thrive, succeed, and fully 
     <br/> participate in all aspects of life.
     </p>
     <button className="ml-8 text-white bg-primary flex justify-center
     items-center gap-2 px-7 py-4 font-inter
     text-lg leading-none rounded">
        More ABout Us
     </button>
 </div>
 

    </section>
   
  )
}

export default WhoWeAre