import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CookiePopup from './components/CookiePopup';
import NavigationRoute from './components/NavigationRoute';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/*" element={<NavigationRoute />} />
      </Routes>
      <CookiePopup />
    </Router>
  );
};

export default App;
