import { Footer, Hero, Services, StayInTouch, WhoWeAre } from '../sections';

const Home = () => {
  return (
    <div>
      <section className="xl:padding-1 wide:padding-r padding-b bg-secondary">
        <Hero />
      </section>
      <section className="p-4 md:p-8 bg-textGray">
        <WhoWeAre />
      </section>
      <section className="p-4 md:p-8">
        <Services />
      </section>
      <section className="p-4 md:p-8 bg-textGray">
        <StayInTouch />
      </section>
      <section className="p-4 md:p-8 bg-secondary">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
