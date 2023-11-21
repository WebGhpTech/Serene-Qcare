import map from '../assets/images/map.png'
import instagram from '../assets/icons/Instagram.png'
import facebook from '../assets/icons/Facebook.png'
import star from '../assets/images/star.png'
import cards from '../assets/images/cards.png'
import logo from '../assets/images/headerLogo.png'
const Contact = () => {
  return (
<section className="bg-secondary h-[120px] w-full">
      <div className="pt-[150px] w-full pb-0 text-white text-center " >
            <div>
               <h1 className="text-darkGray text-4xl font-bold">Contact Us <span className="text-primary">Today</span></h1>
               <p className="tex-lg font-medium text-button2">We encourage you to reach out to us for more information, questions, or assistance. Our dedicated team is here to 
               <br/>support you on your journey towards success and inclusion.</p>
            </div>
         </div>
         <div className="wrapper ml-[50px] mt-10 flex ">
             <div className="ml-[100px]">
                  <div className="mb-10">
                  <h4 className="mb-10 font-semibold text-2xl text-[#334155]">Drop us a line</h4>
                  <div>
                     <div><label className="font-normal text-xs">Name*</label></div>
                  <input className="pl-4 mb-10 w-[560px]  border rounded-md px-2 py-4 textGray text-slate-gray" placeholder="Name " type="text" name="search"/>
                  </div>
                  
                  <div>
                     <div><label className="font-normal text-xs">Email*</label></div>
                  <input className=" pl-4 mb-10 w-[560px] border rounded-md px-2 py-4 textGray text-slate-gray" placeholder="Email " type="text" name="search"/>
                  </div>
                  
                  <div>
                     <div><label className="font-normal text-xs">Message*</label></div>
                  <input className="w-[560px] border rounded-md pb-[150px] pl-4 h-[202px] textGray text-slate-gray"  placeholder="Message " type="text" name="search"/>
                  
                  </div>
                  
                  <button className="mt-10  bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none w-24 rounded-md pl-3 pr-3     px-2 py-4 text-white font-inter bg-primary ">
                     Send
                  </button>
                  
                </div>
                
             </div>
             <div className="ml-10 mr-[136px] h-[479px] w-[700px] mx-auto relative rounded-2xl bg-slate-50 box-border w-full flex-col items-start justify-start p-5 gap-[24px] text-left text-base text-slate-500 font-lg-bold border-[1px] border-solid border-slate-200">
             <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
               <div className=" relative tracking-[0.01em]">
                 <p className="[margin-block-start:0] [margin-block-end:5px] text-lg">
                   <b>Serene QCare</b>
                 </p>
                 <p className="[margin-block-start:0] [margin-block-end:5px] leading-[24px]">
                   Redwood Street, Kingston <br/> Queensland 4114, Australia
                 </p>
                 <p className="[margin-block-start:0] [margin-block-end:5px] leading-[24px]">{`0734166259 `}</p>
                 <p className="m-0 leading-[24px] mb-5">
                   0466 791 364 <br/> admin@sereneqcare.com.au
                 </p>
               </div>
               <div className=" flex flex-col text-xl text-slate-700">
                  
                 <b className="ml-[80px] ">Socials</b>
                 <div className='ml-20 gap-2 flex flex-row'>
                 <img
                   className="w-[31.32px] h-[31.32px]"
                   alt="insta"
                   src={instagram}
                 />
                 <img
                   className="  w-[31.32px] h-[31.32px]"
                   alt="fb"
                   src={facebook}
                 />
               </div>
               </div>
             </div>
             <b className=" self-stretch relative text-lg tracking-[0.01em] text-slate-700">
               Hours
             </b>
             <div className="mt-5 self-stretch flex flex-row items-start justify-start gap-[16px]">
               <div className="relative tracking-[0.01em] leading-[28px] font-medium inline-block w-[65px] shrink-0">
                 <p className="m-0">Mon</p>
                 <p className="m-0">Tue</p>
                 <p className="m-0">Wed</p>
                 <p className="m-0">Thu</p>
                 <p className="m-0">Fri</p>
                 <p className="m-0">Sat</p>
                 <p className="m-0">Sun</p>
               </div>
               <div className="flex-1 relative tracking-[0.01em] leading-[28px] font-medium">
                 <p className="m-0">09:00 am – 05:00 pm</p>
                 <p className="m-0">09:00 am – 05:00 pm</p>
                 <p className="m-0">09:00 am – 05:00 pm</p>
                 <p className="m-0">09:00 am – 05:00 pm</p>
                 <p className="m-0">09:00 am – 05:00 pm</p>
                 <p className="m-0">Closed</p>
                 <p className="m-0">Closed</p>
               </div>
           
       
               </div>      
    </div>
</div>
   <div className=' pt-10'>
     <img className="w-full"src={map}/>
   </div>
   <div className='bg-secondary'>
      <h1 className='text-center text-white text-3xl font-bold pt-[80px]'>Reviews</h1>
   </div>

   <div id="wrapper" className='pt-[40px] bg-secondary flex flex-col-3 justify-center gap-[32px] h-[662px]'>
      <div className='text-center bg-white border-6 px-10 py-5 w-[378.67px] h-[404px]'>
         <p className='font-medium text-2xl text-button2 text-left'>being apart of the group <br/> 
         who gets support from<br/>
         this has been a blast and i <br/>
         will never be reluctant <br/>
         sining there contracts</p>
         <div className='mt-[130px] flex flex-col-5'>
                 <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                
          </div>
          <p className='pt-1 text-darkGray text-left'>Norooz</p>
           <p className=' pt-1 text-gray-400 text-left'>15/07/2023</p>
         
      </div>
      <div className='text-center bg-white border-6 px-8 py-5 w-[378.67px] h-[404px]'>
         <p className='font-medium text-2xl text-button2 text-left'>I am a support worker who <br/> 
         was under paid by at least<br/>
         10 hours a week . As soon <br/>
         as I transferred here I was <br/>
         paid correct at the correct<br/>
         time and even got a raise<br/>
         over the short time i <br/>
         worked here
         </p>
         <div className='mt-[40px] flex flex-col-5'>
                 <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                
          </div>
          <p className='pt-1 text-darkGray text-left'>Abbas</p>
           <p className='pt-1 text-gray-400 text-left'>06/11/2023</p>
      </div>
      <div className='text-center bg-white border-6 px-10 py-5 w-[378.67px] h-[404px]'>
         <p className='font-medium text-2xl text-button2 text-left'>lovely and helpful  <br/> 
         staff,very attentive too.
         </p>
         <div className='mt-[215px] flex flex-col-5'>
                 <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                <img  
                 src={star}
                 width={26.27}
                 height={25}
                 className=''
                />
                
          </div>
          <p className='pt-1 text-darkGray text-left'>Chloe</p>
           <p className='pt-1 text-gray-400 text-left'>20/08/2023</p>
      </div>
   

   </div>
   <div className='h-[322px] bg-blue pl-[150px] pt-[71px]'>
     <h2 className='text-semibold text-3xl font-bold text-darkGray pb-5'>Subscribe</h2>
     <p className='text-button2 pb-4 font-medium text-xl'>Learn more about our upcoming events, fundraisers, and more!</p>
     <input className="w-[749px] border rounded px-2 py-4 textGray text-slate-gray pl-3" placeholder="Email Address " type="text" name="search"/>
     <button className='ml-5 bg-primary text-white tex-semibold w-40 px-2 py-4 rounded-md'>Sign Up</button>
   
   </div>
    <div className='text-center jsutify-center bg-[#1E203B] text-white h-[438px]'>
      
      <h1 className='text-3xl font-bold pt-[71px]'>Help Our Cause</h1>
      <p className=' text-md pb-5'>Your support and contributions will enable us to meet our goals and improve conditions. Your generous donation will fund our mission.</p>
      <button className='rounded bg-primary px-2 py-4 w-48'>Donate Now</button>
      <img className="ml-[500px] pt-10"src={cards}/>
      
    </div>
    <div className="bg-secondary pt-20 w-full text-white font-normal h-[319px] text-center items-center justify-center ">
             <img
                src={logo}
       
                className="ml-[530px] items-center justify-center"
             ></img>
             <p className="mt-5 font-inter text-sm text-slate-gray " >6 Redwood street, Kingston, Queensland, 4114, Australia | 07 3416 6259</p>
             <p className="mt-5 font-inter text-sm text-slate-gray">© 2023 Serene QCare. All rights reserved.</p>
              
    </div>
   
</section>
  )
}

export default Contact
