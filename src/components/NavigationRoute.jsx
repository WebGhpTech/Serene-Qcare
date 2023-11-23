import { Route, Routes } from 'react-router-dom';
import { Home, About, Services, Team, Contact, Receive } from '../pages';

const NavigationRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/receive" element={<Receive />} />
      
    </Routes>
  );
};

export default NavigationRoute;
