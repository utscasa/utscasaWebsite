import {  Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import EventPage from './pages/Events';
import TeamPage from './pages/Team';
import SpecEvent from './pages/SpecEvent';
import Testing from './pages/Testing'; 
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:eventId" element={<SpecEvent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactPage />} /> 
        <Route path="/team" element={<TeamPage/>} /> 
        <Route path="/testing" element={<Testing/>}/>
       
      </Routes>
  );
}