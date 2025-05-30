// This is the main file of the frontend. It is the first file that is run when the frontend is started.
import { FaCalendarDay } from "react-icons/fa"; 
import { HiAcademicCap } from "react-icons/hi2"; 
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"; 
import { FaInstagram } from "react-icons/fa6";
import { BecomeMemberSection, EventsPreviewSection, NewsLetterSection } from "../sections";

function HomePage() {
    return (
      <main className="App">  
      {/* This is the section for the landing page */}
        <section className=" relative w-full min-h-screen md:h-screen bg-landing bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">  
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-highligth-lighter px-4">
        <h1 className="text-5xl font-semibold font-[Montserrat]">
          African Student Association
        </h1>
        <p className="text-lg font-medium font-[Montserrat] mt-2 opacity-75">
          Celebrating Culture, Supporting Students, and Raising Awareness
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-6">
        <a  href="/events"><button className="text-sm md:text-lg font-bold font-[Montserrat] border-b-2 border-highligth-lighter px-6 py-2  hover:font-black transition">
            Upcoming Events ↗
          </button></a>
          <a  target='_blank' rel="noreferrer" href="https://www.instagram.com/utscasa/"> <button className="text-sm md:text-lg font-bold font-[Montserrat] border-b-2 border-highligth-lighter hover:font-black px-6 py-2  transition flex items-center gap-2">
            Our Instagram <FaInstagram />
          </button> </a>
        </div>
      </div>
        </section>  
      {/* This is the section for the who we are section */} 
      <section className="w-full min-h-[75vh] flex flex-col items-center justify-center text-bgcol mb-8">
        <div className="w-full flex flex-col items-center justify-center px-4 md:py-8 mb-4 md:mb-0">
          <h2 className="text-5xl font-semibold py-4 mb-8">Who Are We?</h2>
          <p className="max-w-[80%] text-2xl text-center font-regular">The African Student Association (ASA) is an event-based club dedicated to celebrating 
            and supporting the African Diaspora and individuals interested in African culture.</p>
          </div> 
        <div className="flex flex-col items-start justify-center px-4 md:px-24 md:py-8">
          <p className="text-xl font-medium mb-4">Events we host</p> 
          <div className="flex flex-col md:flex-row items-center justify-between w-full "> 
            <div className="bg-bgbox rounded-lg flex flex-col items-start justify-center md:w-[30%] min-h-[200px] p-4 mb-4 md:mb-0"> 
              <FaCalendarDay className="w-8 h-8" />
              <p className="text-xl font-bold py-4">Cultural& Social Events</p> 
              <p className="text-base">A space to connect, celebrate, and have fun! 
                These events are themed around African culture, 
                providing an opportunity to mingle, meet new people, 
                and enjoy shared experiences.</p> 
            </div> 
            <div className="bg-bgbox rounded-lg flex flex-col items-start justify-center md:w-[30%] min-h-[200px] p-4 mb-4 md:mb-0">
              <HiAcademicCap className="w-8 h-8" /> 
              <p className="text-xl font-bold py-4">Academic Support & Wellnes</p>   
              <p className="text-base">We understand the challenges of student life. ASA hosts study sessions, stress 
                management workshops, etc. to help members thrive academically.</p>
            </div> 
              <div className="bg-bgbox rounded-lg flex flex-col items-start justify-center md:w-[30%] min-h-[200px] p-4 mb-4 md:mb-0">
              <HiOutlineGlobeEuropeAfrica className="w-8 h-8" /> 
              <p className="text-xl font-bold py-4">Advocacy & Awareness</p> 
              <p className="text-base">We raise awareness about important issues affecting underrepresented
                 regions of the African continent and affecting the African diaspora in North America.</p>

            </div>
          </div>
        </div>
      </section>
      {/* This is the section for the news letter */}  
      
      <NewsLetterSection/> 
      <EventsPreviewSection/>
      <BecomeMemberSection/>

      </main>
    );
  }
  
  export default HomePage;
  