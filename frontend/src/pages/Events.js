import EventCard from "../components/EventCard"; 
import { eventsInfo } from "../EventsDictionary";
export default function EventPage() {
    return (
        <div className="min-h-screen flex flex-col justify-start items-center">
        <h1 className="text-highlight text-5xl font-semibold py-[5%]">Upcoming Events</h1> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-24 px-[5%]"> 
        {eventsInfo.map((event) => (
            <EventCard key={event.name} event={event} />
        ))}
        </div>
        </div>
    );
}