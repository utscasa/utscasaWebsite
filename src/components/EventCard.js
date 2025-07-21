// import { Link } from 'react-router-dom';
import { MdAccessTime } from "react-icons/md";  
import { MdCalendarToday } from "react-icons/md"; 
import { MdLocationPin } from "react-icons/md";

// This is a card component that will be used to display the events in the events page. 
// The card will display the event name and the event image if given. 
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function EventCard({ event }) {  

    return ( 
        // <Link to={`/events/${event.id}`}> 
        // <div className="card">  
        // {event.image !== 'default' ?  <img src={event.image} alt="Event" className=" w-36 h-36 md:h-40 md:w-40 lg:h-80 lg:w-80 rounded-lg" /> 
        // : <div className='bg-bgcol  h-40 w-40  lg:h-80 lg:w-80 flex flex-row justify-center items-center rounded-md'><p className='text-white text-xl lg:text-3xl'>{event.name} </p></div>}
        // </div>
        // </Link> 
        <div className="font-body sm:min-h-[650px] sm:w-[375px] shadow-lg rounded-lg">  
            <div> 
                <img alt={event.title} className="w-[375px] h-[350px] rounded-lg" src={event.image} />
            </div>
            <div id="eventInfo" className="bg-white sw-full h-[300px] flex flex-col items-center justify-center rounded-lg"> 
                <div className="w-full h-[200px] my-4 px-4">  
                <h3 id="eventTitle" className="font-bold text-xl text-bgcol mb-3">{event.title}</h3>  
                <div className="mb-4 font-normal text-md"> 
                    <div id="eventDate" className="flex flex-row"><MdCalendarToday /><p className="ml-2">{formatDate(event.date)}</p> </div>  
                    <div id="eventTime" className="flex flex-row"><MdAccessTime /><p className="ml-2">{event.time}</p></div> 
                    <div id="eventLocation" className="flex flex-row"><MdLocationPin /><p className="ml-2">{event.location}</p></div>

                </div> 
                <p>{event.description}</p> 

                </div>
             
                <a href={event.link} className="flex flex-row justify-center w-full"><button className="w-[80%] rounded-lg p-2 bg-highligth-lighter font-body text-black text-sm  font-semibold">RSVP Now</button></a>
               
            </div>

        </div>
    );
}