import { SmallEventCard } from "../components"; 
import { eventsInfo } from "../data/EventsDictionary"; 
import { Link, useLocation } from 'react-router-dom';

export default function EventsPreviewSection(){   
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight 
    const upcomingEvents = eventsInfo.filter((event) => new Date(event.date) >= today);
    return( 
        <section className="flex flex-col  sm:justify-center sm:items-center h-screen md:h-[75vh]">  
        <h1 className="text-3xl font-bold text-bgcol mb-12">Upcoming Events</h1>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center mb-8"> 
            {upcomingEvents.map((event)=><SmallEventCard event={event}/>)}
        </div>

        <Link to='/Events' ><button className="bg-highligth-lighter h-[42px] w-[156px] hover:w-[152px] hover:h-[38px] hover:m-[2px] rounded-md font-medium text-xl ">View All Events</button> </Link>
            
        </section>
    )

}