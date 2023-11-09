

const StayInTouch = () => {
  return (
    <section className="text-center max-container">
    <div >
    <h2 className="mt-5 mb-5 text-darkGray font-bold
    font-inter text-3xl ">Stay in touch</h2>
    <h5 className="text-button2 mb-6">Learn more about our upcoming events, fundraisers, and more!
    </h5>
    </div>

    <div className= "text-center max-container">
       
     <input className="w-72 border rounded-md px-2 py-2 textGray text-slate-gray" placeholder="Enter your email " type="text" name="search"/>
     <button className="w-28 rounded-md pl-3 pr-3 ml-5 px-2 py-2 text-white font-inter bg-primary ">
        Subscribe
     </button>
    </div>
    </section>
    
  )
}

export default StayInTouch