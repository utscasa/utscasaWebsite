import {  Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import EventPage from './pages/Events';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/events" element={<EventPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
  );
}