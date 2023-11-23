import ReactPlayer from 'react-player'
import services1 from '../assets/images/services1.png'
import services2 from '../assets/images/services2.png'
import services3 from '../assets/images/services3.png'    
import services4 from '../assets/images/services4.png'
import services5 from '../assets/images/services5.png'   
import logo from '../assets/images/headerLogo.png'

const Services = () => {
  return (
    <section className=' bg-secondary h-[100vh]'>
    
      <div className='pt-[150px] w-full pb-0 text-white ml-[100px] justify-center '>
        <div className='flex'>
             <div className='pt-40'>
              <h1 className="text-4xl font-bold">
               <span className="text-primary">What is NDIS?</span></h1>
               <h3><span className="text-white font-semibold text-2xl">Check out this great video</span></h3>
               
             </div>
               <div className='w-1/2 ml-[150px]'>
               <ReactPlayer url='https://www.youtube.com/watch?v=qZOjPBJiBPg' />
               </div>
        </div>
 </div>
 <div className='pt-[150px] flex mb-10'>
    <div className='ml-20 pt-10'>
       <h2 className='text-3xl font-bold text-[#334155]'>Community Care</h2>
       <p className='text-left mt-5 text-button2'>Our support workers are compassionate and dedicated <br/>
       professionals who provide direct care and support to individuals <br/>
       with disabilities. They assist with daily activities, personal care, <br/>
       and mobility needs, promoting independence and enhancing <br/>
       quality of life. Our support workers build strong relationships <br/>
       with individuals, offering emotional support, companionship, and<br/>
        fostering a safe and nurturing environment.</p>
        <button className='bg-button2 rounded w-32 px-2 py-4 mt-5 text-white font-semibold'>Learn More</button>
    </div>
       <div className='mx-auto'><img className="ml-[100px] mx-10"src={services1}></img></div>
       
 </div>
   <div className='bg-textGray pt-[50px] flex mx-auto pb-10'>
       <div className='ml-20'>
          <img src={services2}></img>
       </div>
       <div className='ml-[50px]'>
          
              <h2 className='text-3xl font-bold text-[#334155]'>Community Nursing</h2>
              <p className='text-left mt-5 text-button2'>Our enrolled nurse is a valuable member of our team who brings <br/>
              a wealth of medical expertise and experience to our disability  <br/>
              services. They work closely with individuals with disabilities,<br/>
              providing medical support, administering medications, and <br/>
              addressing any health-related concerns. Our enrolled nurse  <br/>
              plays a vital role in ensuring the overall well-being and<br/>
              healthcare needs of the individuals we see</p>
               <button className='bg-button2 rounded w-32 px-2 py-4 mt-5 font-semibold text-white'>Learn More</button>
           
       </div>
   </div>
   <div className='pt-[50px] flex mb-10 '>
    <div className='ml-20'>
       <h2 className='text-3xl font-bold text-[#334155]'>Home Care</h2>
       <p className='text-left mt-5 text-button2'>We are committed to ongoing evaluation and improvement of our <br/>
       services. We seek feedback from clients, families, and  <br/>
       stakeholders to continuously enhance our programs, policies, <br/>
       and practices. By staying informed about the latest <br/>
       advancements in disability support and incorporating best  <br/>
       practices, we ensure that our services remain relevant, effective,<br/>
       and responsive to the evolving needs of our clients.</p>
        <button className='bg-button2 rounded w-32 px-2 py-4 mt-5 text-white font-semibold'>Learn More</button>
    </div>
       <div className='mx-auto'><img className="ml-[100px] mx-10"src={services3}></img></div>
       
 </div>
 <div className='bg-textGray pt-[50px] flex mx-auto pb-10'>
       <div className='ml-20'>
          <img src={services4}></img>
       </div>
       <div className='ml-[50px]'>
          
              <h2 className='text-3xl font-bold text-[#334155]'>Personal Support Services</h2>
              <p className='text-left mt-5 text-button2'>We aim to offer a wide range of services and supports tailored to <br/>
              the unique needs of individuals with disabilities. From   <br/>
              accommodations and assistive technologies to personal care <br/>
              and emotional support, our goal is to provide holistic and  <br/>
              person-centered care that addresses the diverse needs of our  <br/>
              clients.<br/>
              </p>
               <button className='bg-button2 rounded w-32 px-2 py-4 mt-5 font-semibold text-white'>Learn More</button>
           
       </div>
   </div>
   <div className='pt-[50px] flex mb-10'>
    <div className='ml-20'>
       <h2 className='text-3xl font-bold text-[#334155]'>Support Coordinator</h2>
       <p className='text-left mt-5 text-button2'>The support coordinator advocates on behalf of the individual,  <br/>
       ensuring their rights and needs are upheld. They assist in <br/>
       navigating bureaucratic processes, addressing concerns, and <br/>
       resolving any issues that may arise in accessing services or <br/>
       support. They work collaboratively with the individual to  <br/>
       empower them to self-advocate and make informed decisions <br/>
       about their own care and support.</p>
       <p className='text-left mt-5 text-button2'>The support coordinator helps individuals set realistic and  <br/>
       achievable goals based on their aspirations and abilities. They  <br/>
       monitor progress and adjust support plans as needed, ensuring  <br/>
       that the individual remains on track toward their desired <br/>
       outcomes. Regular check-ins and evaluations allow for  <br/>
       adjustments to the support plan and identification of additional  <br/>
       resources or modifications as necessary.</p>
        <button className='bg-button2 rounded w-32 px-2 py-4 mt-5 text-white font-semibold'>Learn More</button>
    </div>
       <div className='mx-auto'><img className="ml-[100px] mx-10"src={services5}></img></div>
       
   </div>
   <div className=' flex bg-textGray w-full h-[360px]'>
               <div>
               <h1 className='font-bold text-3xl pt-20 ml-[100px] mb-10'> <span className='text-darkGray'>Contact Us </span> <span className='text-primary'>Today</span></h1>
               <p className='ml-[100px] text-button2 text-md '>We encourage you to reach out to us for more information, questions, <br/>or assistance. Our dedicated team is here to support you on your<br/> journey towards success and inclusion.</p>
               </div>

               <div>
               <button className='bg-primary rounded text-white text-medium text-lg px-6 py-5 ml-[250px] mt-[40%] w-48 '>Contact Us</button>
               </div>
            
            </div>
      
            <div id="footer" className="bg-secondary w-full "> 
            <div className="pt-20 w-full text-white font-normal h-[319px] text-center items-center justify-center max-container">
             <img
                src={logo}
       
                className="ml-[500px] items-center justify-center"
             ></img>
             <p className="mt-5 font-inter text-sm text-slate-gray " >6 Redwood street, Kingston, Queensland, 4114, Australia | 07 3416 6259</p>
             <p className="mt-5 font-inter text-sm text-slate-gray">© 2023 Serene QCare. All rights reserved.</p>
              
            </div>
           </div>
      
    </section>
    
    
  )
}

export default Services
