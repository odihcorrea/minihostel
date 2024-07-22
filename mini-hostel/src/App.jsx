import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Rooms from './components/Rooms';
import HowToGet from './components/HowToget';
import Tours from './components/Tours';
import Ebook from './components/Ebook';
import Contact from './components/Contact';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/how-to-get" element={<HowToGet />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton />
    </Router>
  );
}

export default App;
