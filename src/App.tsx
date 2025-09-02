import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AboutPage from './Pages/About';
import Service from './Pages/Service'; 
// import WhatsAppFloatingButton from './Components/Floatingwatsapp';
import Contact from './Pages/Contact';
import PrivacyPolicySections from './Pages/Privacy-Policy';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/offerings" element={<Service />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicySections />} />
        {/* Add other pages later */}
      </Routes>
      {/* <WhatsAppFloatingButton /> */}
    </Router>
  );
}

export default App;
