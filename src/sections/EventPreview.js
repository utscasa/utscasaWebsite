import { SmallEventCard } from "../components"; 
import { eventsInfo } from "../data/EventsDictionary"; 
import { Link} from 'react-router-dom';

export default function EventsPreviewSection(){   
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight 
    const upcomingEvents = eventsInfo.filter((event) => new Date(event.date) >= today);
    return( 
        <section className="flex flex-col  justify-center items-center h-[75vh] font-body">  
        <h1 className="text-3xl font-bold text-bgcol mb-12">Upcoming Events</h1>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center mb-8"> 
            {upcomingEvents.length>0 ?   upcomingEvents.map((event)=><SmallEventCard event={event}/>) : 
            <div className="p-24"><p className="text-xl font-semibold text-center"> No upcoming events yet. Stay tuned for updates!</p> </div>  }
            
        </div>

        <Link to='/Events' >
        <button className="bg-highligth-lighter h-[50px] w-[200px] hover:w-[196px] hover:h-[46px] hover:m-[2px] rounded-md font-medium text-xl">View All Events</button> 
        </Link>
            
        </section>
    )

}