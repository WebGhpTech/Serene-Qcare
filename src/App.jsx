import {Footer, Hero, Services, StayInTouch, WhoWeAre} from "./sections"
import Nav from "./components/Nav"
const App = () => {
  return (
    <main className="relative">
        <Nav/> 
      <section className="xl:padding-1 wide:padding-r padding-b bg-secondary">
        <Hero/>
      </section>
      <section className="padding bg-textGray">
        <WhoWeAre/>
      </section>
      <section className="padding ">
        <Services/>
      </section>
      <section className="padding bg-textGray">
        <StayInTouch/>
      </section>
      <section className="padding bg-secondary">
        <Footer/>
      </section>
    </main>
  )
}

export default App