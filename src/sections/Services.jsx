import icon1 from "../assets/images/icon1.png"
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"
import icon4 from "../assets/images/icon4.png"
import icon5 from "../assets/images/icon5.png"

const Services = () => {
  return (
    <section className=" text-center max-container">

    <div className="mt-20">
 
    <h4 className="mx-auto text-center bg-primary h-22 px-4 flex items-center text-sm bg-purple rounded-full w-24 text-primary animate-on-scroll">SERVICES</h4>
    <h2 className="mt-5 mb-5 text-darkGray font-bold
    font-inter text-2xl animate-on-scroll">Our Support Services</h2>
    <h5 className="text-button2 animate-on-scroll">Our mission is to provide high-quality and effective disability services, where every person we <br/>care for maters .</h5>
   </div>
  <div className="gap-32 mt-10 items-center justify-center flex flex-wrap ">
     <div className="animate-on-scroll">
      <img 
      width={64}
      height={64}
        src={
        icon1
      }
        
      className="mb-5 mx-auto ml-auto item-center justify-center align-center self-center animate-on-scroll"
       />
      <h3 className="mb-5 font-bold text-2xl text-darkGray">Community Care</h3>
      <p className="text-button2 text-base">Our support workers are <br/> 
      compassionate and dedicated<br/> 
      professionals who provide direct <br/>
      care and support.</p>
     </div>
     <div>
     <img src={
      icon2
    }
    className="mb-5 mx-auto item-center justify-center align-center self-center animate-on-scroll"
     />
     <h3 className="mb-5 font-bold text-2xl text-darkGray">Community Nursing</h3>
      <p className="text-button2 text-base">We aim to offer a wide range of <br/> 
      services and supports tailored to the 
      <br/>unique needs of individuals with <br/>
      disabilities.</p>
     </div>
     <div>
     <img src={
      icon3
    }
    className="mb-5 mx-auto item-center justify-center align-center self-center animate-on-scroll"
     />
     <h3 className=" mb-5 font-bold text-2xl text-darkGray">Home Care</h3>
      <p className="text-button2 text-base">Our support workers are <br/> 
      compassionate and dedicated<br/> 
      professionals who provide direct <br/>
      care and support.</p>
     </div>


     <div className="animate-on-scroll">
     <img src={
      icon4
    }
    className="mb-5 mx-auto item-center justify-center align-center self-center animate-on-scroll"
     />
     <h3 className="mb-5 font-bold text-2xl text-darkGray">Personal Support Services</h3>
      <p className="text-button2 text-base">Our support workers are <br/> 
      compassionate and dedicated<br/> 
      professionals who provide direct <br/>
      care and support.</p>
     </div>

     <div>
     <img src={
      icon5
    }
    className=" mb-5 mx-auto item-center justify-center align-center self-center animate-on-scroll"
     />
     <h3 className="mb-5 font-bold text-2xl text-darkGray">Support Coordinator</h3>
      <p className="text-button2 text-base">We aim to offer a wide range of <br/> 
      services and supports tailored to the<br/> unique needs of individuals with<br/> disabilities.
      </p>
     </div>
</div>  
  
  
    
    </section>
  )
}

export default Services