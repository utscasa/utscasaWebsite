import { Link } from 'react-router-dom';

// This is a card component that will be used to display the events in the events page. 
// The card will display the event name and the event image if given. 
export default function EventCard({ event }) {  

    return ( 
        <Link to={`/events/${event.id}`}> 
        <div className="card">  
        {event.image !== 'default' ?  <img src={event.image} alt="Event" className=" w-36 h-36 md:h-40 md:w-40 lg:h-80 lg:w-80 rounded-lg" /> 
        : <div className='bg-bgcol  h-40 w-40  lg:h-80 lg:w-80 flex flex-row justify-center items-center rounded-md'><p className='text-white text-xl lg:text-3xl'>{event.name} </p></div>}
        </div>
        </Link>
    );
}