import { Route, Routes } from 'react-router-dom';
import { Home, About } from '../pages';

const NavigationRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Home />} />
      <Route path="/team" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  );
};

export default NavigationRoute;
