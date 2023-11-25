import team from '../assets/images/team.png'
import team1 from '../assets/images/team1.png'
import team2 from '../assets/images/team2.png'
import team3 from '../assets/images/team3.png'
import team4 from '../assets/images/team4.png'
import logo from '../assets/images/headerLogo.png'
const Team = () => {
  return (
    <div>
    <section className="bg-secondary h-[688px]">
         <div className="pt-[200px] pb-0 text-white ml-[100px] justify-center" >
            <div className="ml-[30px] flex flex-1 w-full">
              <div className="  max-lg:w-1/2 ">
              <h1 className="text-4xl font-bold"><span className="text-primary">Professional <br/>Growth</span></h1>
              <h5 className="mt-5 text-white text-lg font-medium">Professional Growth and <br/>
              Development We are committed <br/>
              to the professional growth and <br/>
              development of our employees.</h5>
              </div>
               
               <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center order-2 ml-[200px]">
                 <img src={team} alt="team" className="rounded-xl "/>
               </div>
            </div>
           
         </div>
        
    </section>
    <section>
        <div className='items-center justify-center content-center gap-32 flex flex-col-2 bg-textGray h-[441px]'>
         
         <p className='text-lg text-button2 text-left'>As a member of our team, you will have access to ongoing <br/>
         training opportunities, workshops, and professional development<br/>
          programs. We believe in investing in our employees, empowering <br/>
          them with the knowledge and skills needed to excel in their<br/>
           roles. You will have the chance to expand your expertise, stay up<br/>
            to date with the latest industry advancements, and enhance your <br/>
            career prospects within the disability services field.</p>
         <p className='text-lg text-button2 text-left pt-[50px]'>A Supportive and Inclusive Work Environment Our organisation <br/>
         fosters a supportive and inclusive work environment where<br/>
          collaboration and teamwork thrive. We believe that each team <br/>
          member brings unique perspectives and strengths, contributing <br/>
          to the overall success of our organisation. We prioritise open <br/>
          communication, respect, and appreciation for diversity.<br/>
          <br/>
          By joining our team, you will become part of a welcoming <br/>
         community that values your contributions and offers a sense of <br/>
         belonging.</p>     
         
         
        </div>
 
    </section>
    <section>
      <div className='flex flex-col-2 justify-center items-center gap-[48px] mb-[48px] pt-[80px]'>
         <div className='border-solid border-2 border-purple rounded-sm  '>
            <img src={team1} alt="team1" className="rounded-sm"/>
            <h5 className="pl-5 text-xl text-[#374151] font-semibold mt-5">Support Worker</h5>
            <p className=" pb-5 pl-5 text-base text-button2 mt-5">Making a Difference Everyday Support workers play a vital role in<br/>
             providing direct care and support to individuals with disabilities. As <br/> 
             a support worker, you will have the opportunity to assist with daily <br/> 
              activities, personal care, and mobility needs. Your compassion, <br/> 
              patience, and dedication will help individuals lead fulfilling lives <br/> 
              and achieve their goals. You will build meaningful relationships, <br/> 
              empower independence, and contribute to a supportive <br/> 
              environment that celebrates diversity.</p>

         </div>
         <div className='mt-8 border-solid border-2 border-purple rounded-md'>
         <img src={team2} alt="team2" className="rounded-sm"/>
         <h5 className="pl-5 text-xl text-[#374151] font-semibold mt-5">Join Our Team: Exciting Opportunities Await -<br/> 
         Support Workers, Nurses, and Support Coordinators<br/>
          Wanted!</h5>
            <p className="pb-5 pl-5 text-base text-button2 mt-5">Are you seeking a meaningful career where you can make a <br/>
            positive impact in the lives of individuals with disabilities? Look no <br/> 
            further! We are thrilled to announce that we are currently hiring for  <br/> 
            support workers, nurses, and support coordinators. As a leading <br/> 
            disability service organization, we are committed to providing <br/> 
            comprehensive support, fostering inclusivity, and empowering  <br/> 
            individuals to reach their full potential.<br/> 
            </p>
         </div>
      </div>
      <div className='flex flex-col-2 justify-center items-center gap-[48px]'>
         <div className='border-solid border-2 border-purple rounded-md '>
            <img src={team3} alt="team3" className="rounded-sm"/>
            <h5 className=" pl-5 text-xl text-[#374151] font-semibold mt-5">EN / RN</h5>
            <p className="pb-5 pl-5 text-base text-button2 mt-5">Enhancing Healthcare for Individuals with Disabilities As a nurse<br/>
             within our organization, you will bring your expertise and passion <br/>
             for healthcare to support individuals with disabilities. Your role will <br/>
             involve providing medical support, administering medications, and<br/>
              addressing healthcare needs. Your knowledge and skills will ensure <br/>
              that individuals receive the highest quality care, promoting their <br/>
              overall well-being and maximizing their health outcomes. Your <br/>
              contributions will be invaluable in creating an environment that <br/>
              prioritizes the physical and mental well-being of those we serve.</p>

         </div>
         <div className='border-solid border-2 border-purple rounded-md '>
         <img src={team4} alt="team4" className="rounded-sm"/>
         <h5 className="pl-5 text-xl text-[#374151] font-semibold mt-5">Support Coordinator</h5>
            <p className="pb-5 pl-5 text-base text-button2 mt-5">Guiding the Path to Empowerment Support coordinators play a<br/>
             crucial role in assisting individuals with disabilities in accessing <br/>
             support services and resources. As a support coordinator, you will <br/>
             work closely with individuals, their families, and support networks <br/>
             to develop personalized support plans. You will coordinate <br/>
             services, advocate for their needs, and empower them to make<br/>
              informed decisions about their care and support. Your guidance<br/>
               and expertise will enable individuals to navigate the complexities <br/>
               of the system and live life to the fullest.</p>
         </div>
         </div>
    </section>
    <section>
        <div className='flex flex-col-2 justify-center items-center gap-[48px] mb-[48px] pt-[80px] '>
           <div className='w-[560px] h-[526] bg-slate-50 border-2 p-5 divide-slate-300 rounded-md mb-[370px]'>
               <div className='divide-y divide-dashed md:divide-solid '>
              <h5 className=' text-xl font-semibold text-[#374151] mb-5 divide-y divide-blue-200 pb-5'>Join Our Team</h5>
              <div className='pt-10'>
              <p className=' text-base text-button2  '>
              Joining our team as a support worker, nurse, or support<br/>
               coordinator presents an incredible opportunity to positively <br/>
               impact the lives of individuals with disabilities. You will <br/>
               contribute to a supportive and inclusive environment, <br/>
               empowering individuals to lead fulfilling lives and achieve <br/>
               their goals. Through ongoing professional growth, a collaborative <br/>
               work environment, and the chance to make a meaningful <br/>
               difference, your career with us will be both rewarding and<br/>
                fulfilling. Take the first step and join our team today!<br/>
                <br/>
              We look forward to welcoming you to our organization and <br/>
              working together to create a more inclusive and empowering <br/>
              world for individuals with disabilities.<br/>
              <br/>
              If youre interested in one of our open positions, start by <br/>
              applying here and attaching your resume.
              </p>
              </div>
              </div>
             
           </div>
           <div className='mt-[30px]'>
               <h5 className='pb-5 text-xl font-semibold text-[#374151]'>Apply</h5>
               <div>
                     <div className='pb-3'><label className="font-normal text-xs">Name*</label></div>
                  <input className="pl-4 mb-10 w-[560px]  border rounded-md px-2 py-4 textGray text-slate-gray" placeholder="Name " type="text" name="search"/>
                </div>
                <div>
                     <div className='pb-3'><label className="font-normal text-xs">Phone*</label></div>
                  <input className="pl-4 mb-10 w-[560px]  border rounded-md px-2 py-4 textGray text-slate-gray" placeholder="Phone " type="text" name="search"/>
                </div>
                <div>
                     <div className='pb-3'><label className="font-normal text-xs">Email*</label></div>
                  <input className="pl-4 mb-10 w-[560px]  border rounded-md px-2 py-4 textGray text-slate-gray" placeholder="Email " type="text" name="search"/>
                </div>
                
                <div >
                     <div className='pb-3 '><label className="font-normal text-xs">Attach Resume*</label></div>
                     <div className='flex'>
                        <div className='w-32 border-2 px-2 py-2 rounded-sm'>
                          <button className='text-button2 '>Choose File</button>
                        </div>
                        <div className='w-48 border-2 px-2 py-2 rounded-sm'>
                           <p className='text-button2 '>No File Chosen</p>
                        </div>
                     </div>
                  
                </div>

                <div className='mt-5'>
                     <div className='pb-3 '><label className="font-normal text-xs ">What service are you interested in? **</label></div>
                  <input className="w-[560px] border rounded-md pb-[150px] pl-4 h-[202px] textGray text-slate-gray"  placeholder="Message " type="text" name="search"/>
                  
                  </div>
                  
                  <button className="mt-10  bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none w-48 rounded-md pl-3 pr-3     px-2 py-2 text-white font-inter bg-primary ">
                     Submit Application
                  </button>
           </div>
        </div>
    
    </section>
    <section className="pt-[50px] bg-secondary h-[320px] justify-center items-center"> 
     <div className="bg-secondary w-full text-white font-normal justify-center items-center">
      <img
         src={logo}

         className="ml-[570px] items-center justify-center"
      ></img>
      <p className="mt-5 font-inter text-sm text-slate-gray justify-center items-center text-center" >6 Redwood street, Kingston, Queensland, 4114, Australia | 07 3416 6259</p>
      <p className="mt-5 font-inter text-sm text-slate-gray justify-center items-center text-center">© 2023 Serene QCare. All rights reserved.</p>
       
     </div>
    </section>
    </div>
    
  )
}

export default Team
