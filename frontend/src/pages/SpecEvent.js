import React from "react";
import { useParams } from "react-router-dom";
import { eventsInfo } from "../data/EventsDictionary";
function SpecEvent() {
  const { eventId } = useParams(); // Extract the 'username' parameter
// What I am gonna do is that on loading the page I will extract the name of the event from the URL 
// then I will use that name to fetch the event details from  for now an array of objects
// then load that information on the page appropriately 
  const event = eventsInfo.find(event => event.id === Number(eventId)); 
  if (!event) {
    return <h2>Event {eventId} not found</h2>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="text-highlight text-5xl font-semibold py-[5%]">{event.name}</h1>   
      <div className="flex flex-row gap-4">
        {event.image!== "default" && <div><img className="md:w-[25vw] md:h-[50vh] w-[50vw] h-[25vh]" src={event.image} alt={event.name} /></div>}
      </div>
      
      <div className="flex flex-col bg-bgbox w-1/2 h-1/2 rounded-lg p-8 m-4"> 
        <div> 
          <p className="text-black text-2xl font-semibold">Data and Time</p> 
          <div className="flex flex-row gap-2">
            <p>{event.date}</p>
            <p>{event.time}</p>
          </div>
        </div>
        <div> 
          <p className="text-black text-2xl font-semibold">Location</p>
          <p>{event.location}</p>
        </div>
        <div>
          <p className="text-black text-2xl font-semibold">Description</p>
          <p>{event.description}</p>
        </div>
        
      </div>
    </div>
  );
}

export default SpecEvent;
