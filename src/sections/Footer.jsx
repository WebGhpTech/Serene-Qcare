import logo from "../assets/images/headerLogo.png"

const Footer = () => {
  return (
    <section className="text-center items-center justify-center max-container"> 
     <div className="text-white font-normal">
      <img
         src={logo}

         className="ml-[500px] items-center justify-center"
      ></img>
      <p className="mt-5 font-inter text-sm text-slate-gray " >6 Redwood street, Kingston, Queensland, 4114, Australia | 07 3416 6259</p>
      <p className="mt-5 font-inter text-sm text-slate-gray">© 2023 Serene QCare. All rights reserved.</p>
       
     </div>
    </section>
  )
}

export default Footer