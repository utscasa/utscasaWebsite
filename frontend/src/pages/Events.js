import EventCard from "../components/EventCard"; 
import { eventsInfo } from "../data/EventsDictionary";
import { SuggestEventSection } from "../sections";
export default function EventPage() {  
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight
    const upcomingEvents = eventsInfo.filter((event) => new Date(event.date) >= today);


    return (
        <div className="min-h-screen flex flex-col justify-start items-center font-body">
        <h1 className="text-highlight text-3xl sm:text-5xl font-semibold pt-[20%] md:pt-[10vh] pb-4 sm:pb-[2%] text-center">Upcoming Events</h1>
        <p className="pb-[5%] font-medium text-xl text-center">Discover our exciting lineup of cultural, educational, and social events.</p> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-24 px-[5%]"> 
        {upcomingEvents.map((event) => (<EventCard key={event.name} event={event} />)) }
        </div>  
        {upcomingEvents.length < 1 && (
            <div className="h-[40vh] w-full flex flex-col items-center justify-center">
                <p className="sm:text-2xl text-lg font-semibold text-center"> No upcoming events yet. Stay tuned for updates.</p>
            </div>
        )}
        <SuggestEventSection/>
        </div>
    );
}