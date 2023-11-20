const Contact = () => {
  return (
     <section className="bg-secondary h-[120px]">
         <div className="pt-[150px] w-full pb-0 text-white text-center " >
            <div>
               <h1 className="text-darkGray text-4xl font-bold">Contact Us <span className="text-primary">Today</span></h1>
               <p className="tex-lg font-medium text-button2">We encourage you to reach out to us for more information, questions, or assistance. Our dedicated team is here to 
               <br/>support you on your journey towards success and inclusion.</p>
            </div>
         </div>
         <div className="wrapper ml-[100px] mt-10">
             <div>
                <div>
                  <h4>Dron us a line</h4>
                  <label>Name*</label>
                  <input className="border-1" type="text" placeholder="Name"></input>
                </div>
             </div>
         </div>
    </section>
  )
}

export default Contact
