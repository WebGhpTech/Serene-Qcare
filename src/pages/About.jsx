import about from '../assets/images/about.png'
import who1 from '../assets/images/who1.png'
import who2 from '../assets/images/who2.png'
import who3 from '../assets/images/who3.png'
import iconwhite1 from '../assets/images/iconwhite1.png'
import iconwhite2 from '../assets/images/iconwhite2.png'
import iconwhite3 from '../assets/images/iconwhite3.png'
import ceo from '../assets/images/ceo.png'
import logo from '../assets/images/headerLogo.png'


const About = () => {
  return (
    <section className=' bg-secondary h-[100vh]'>
    
      <div className='pt-[200px] w-full pb-0 text-white ml-[100px] justify-center '>
          <div className='flex '>
            <h1 className=''>
            <span className='leading-1 text-white text-4xl font-bold font-[60px]'>The wise choice <br/>for independence</span> <br/>
            <span className='leading-1 text-primary text-4xl font-bold font-[60px]'>SQC is the place<br/> for all</span>
           </h1>
           <img 
           src={about} 
           width={584}
           height={382}
           className=' ml-[100px] '
          alt='about'/>
          </div>  
   </div>
<div className='bg-textGray h-[796px]'>
   <div className=' ml-[100px] mt-[70px] flex xl:justify-wrap items-center max-xl:flex-col-reverse gap-5 max-container max-sm:mt-60 h-[796px] '>
     <div className="gap-5 mb-5 md:ml-10  ">
        <img
          src={who1}
          width={270}
          height={319}
          className="mb-5 "
          alt="Who 1"
        />
        <img
          src={who2}
          width={270}
          height={319}
          className=""
          alt="Who 2"
        />
        
      </div>
      <img
          src={who3}
          width={270}
          height={355}
          className=""
          alt="Who 3"
        />
      <div className="flex">
        
        <div className='ml-20 '>
           <h4 className='text-darkGray font-semibold text-3xl'>Welcome to our </h4>
           <h1 className='text-primary text-4xl font-bold '><span>Disability Services <br/>Department</span></h1>
           <p className='text-secondary text-sm mt-7 '>I have been a member of NDIS services for three years when I started my <br/> Nursing career. After graduation from I worked at a hospital setting <br/>
           around the area as an Enrolled nurse. Not too long after, I realised me <br/>
           and my husband both had the right skills and mindset to start our own <br/>
           little gig. We put our heart and passions together to create this<br/>
            considerate and cooperative community service collaboration. Since our <br/>
            establishment, we have been at the forefront of advocating for <br/>
            individuals with disabilities and working towards creating an inclusive <br/>
            society. </p>
           <p className='text-secondary text-sm mt-5 '>
            Our department is dedicated to providing support, resources, community<br/>
            nursing, activities of daily living community participation and transport to<br/>
             ensure equal opportunities for individuals of all abilities. We are <br/>
             committed to creating an accessible environment that ensures <br/>
             individuals with disabilities have equal opportunities to access education,<br/> 
             employment and community activities.</p>
        </div>
       </div>
      </div>
      <div/>
      
<div className="bg-no-repeat h-[480px] bg-[#312E81] w-full bg-center" 
     >
     <div>
      <div>
         
      <h1 className='text-white text-4xl font-bold text-center pt-10'>Our Values</h1>
       
      </div>
 
   <div className='gap-32 mt-10 items-center justify-center flex flex-wrap' >
   <div className="">
   <img 
   width={64}
   height={64}
     src={
     iconwhite1
   }
     
   className="mb-5 mx-auto ml-auto item-center justify-center align-center self-center"
    />
   <h3 className="text-center mb-5 font-bold text-2xl text-white">Respect</h3>
   <p className="text-center font-medium text-white text-base">We respect peoples decisions, <br/> opinions, and views. 
   </p>
  </div>
  <div className="">
  <img 
  width={64}
  height={64}
    src={
    iconwhite2
  }
    
  className="mb-5 mx-auto ml-auto item-center justify-center align-center self-center"
   />
  <h3 className="text-center mb-5 font-bold text-2xl text-white">Honesty</h3>
  <p className="text-center font-medium text-white text-base">We are trustworthy and tell the<br/> truth to keep our promise to you. <br/> opinions, and views. 
  </p>
 </div>
 <div className="">
 <img 
 width={64}
 height={64}
   src={
   iconwhite3
 }
   
 className="mb-5 mx-auto ml-auto item-center justify-center align-center self-center"
  />
 <h3 className="text-center mb-5 font-bold text-2xl text-white">Confidentiality</h3>
 <p className="text-center font-medium text-white text-base">This is of the utmost importance as <br/>outlined in our privacy and <br/>confidentiality. 
 </p>
     </div>
        </div>
        
      
      </div>
      </div>
        <div className=' flex h-[510px]'>
         <div >
         <h4 className="mt-10 ml-[200px] text-center bg-primary h-22 px-2.5 flex items-center text-md bg-purple rounded-full w-24 text-primary ">SERVICES</h4>
         <h3 className='ml-[200px] mt-5 text-3xl leading-normal font-bold'><span>We are a </span> <span className='text-primary'>dedicated team of <br/>professionals</span> <span>passionate about<br/> advocating for individuals with<br/> disabilities.</span></h3>
         <p className='ml-[200px] mt-5 mb-5 text-sm  text-button2 '>We are a dedicated team of professionals passionate about advocating for<br/> individuals with disabilities. Our staff members bring a wealth of expertise and<br/> experience in disability support services, ensuring that we provide the highest <br/>quality assistance to our community.</p>
         </div>
           <div className='ml-20 mt-20'><img className='' src={ceo}/></div>
           
         </div>
            <div className=' flex bg-textGray w-full h-[360px]'>
               <div>
               <h1 className='font-bold text-3xl pt-20 ml-[200px] mb-10'> <span className='text-darkGray'>Contact Us </span> <span className='text-primary'>Today</span></h1>
               <p className='ml-[200px] text-button2 text-sm'>We encourage you to reach out to us for more information, questions, <br/>or assistance. Our dedicated team is here to support you on your<br/> journey towards success and inclusion.</p>
               </div>

               <div>
               <button className='bg-primary rounded text-white text-medium text-lg px-6 py-5 ml-[250px] mt-[40%] w-48 '>Contact Us</button>
               </div>
            
            </div>
      
            <div id="footer" className="bg-secondary w-full "> 
            <div className="pt-20 w-full text-white font-normal h-[319px] text-center items-center justify-center max-container">
             <img
                src={logo}
       
                className="ml-[550px] items-center justify-center"
             ></img>
             <p className="mt-5 font-inter text-sm text-slate-gray " >6 Redwood street, Kingston, Queensland, 4114, Australia | 07 3416 6259</p>
             <p className="mt-5 font-inter text-sm text-slate-gray">© 2023 Serene QCare. All rights reserved.</p>
              
            </div>
           </div>
          
            
      </div> 
   <div>
</div>
      
   
     
    </section>
    
  );
};

export default About;
