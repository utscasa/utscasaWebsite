import mongoose from "mongoose";
import Events from "../models/eventModel.mjs";

/* This route returns all the events that are in the database including all their information
Method: GET 
Path: "api/events/" 
Returns: Status 200 and all events in the database 
or Status 400 and error code. 
*/ 
export const getAllEvents  = async (req, res) =>{ 
    try {
        const allEvents = await Events.find();  
        return res.status(200).json(allEvents);

    } catch (error) {
        return res.status(400).json({error: error})
    }
}

/* This route returns the event identified by the id in the parameters including all its information
Method: GET 
Path: "api/events/:id" 
Returns: Status 200 and the event with id id 
or Status 400 and error code. 
*/
export const getEvent= async (req,res) => { 
    const eventId = req.params.id;  
    if (!mongoose.Types.ObjectId.isValid(eventId)){
        return res.status(400).json({mssg: "There is no such event"})
    }    
    try {
        const event = await Events.findById(eventId);  
        return res.status(200).json(event);

    } catch (error) {
        return res.status(400).json({error: error})
    }
}

/* Given a title, date, startTime, endTime, and location in the correct formats
 returns the event added to the database including all its information
Method: POST
Path: "api/events/" 
Returns: Status 200 and the event with id id 
or Status 400 and error code. 
*/
export const createEvent = async(req,res) =>{ 
    const{title, date, startTime, endTime, location} = req.body; 
        try{ 
            // I need to check if there is anything missing from the requirements
            const event= await Events.create({title, date, startTime, endTime, location})
            return res.status(200).json(event); 
        }catch(error){
            console.log(error)
            return res.status(400).json({error: error})
        }; 
}

/*
Given an object with the fields from that of the event model and a valid id 
the function updates the corresponding fields in the document 
if the id is not valid an error will be thrown while a status of 4** will be given otherwise 
an error status will be given and the error code will be returned 
*/ 
export const updateEvent = async(req,res) =>{  
    const id = req.params.id;   
    if (!mongoose.Types.ObjectId.isValid(eventId)){
        return res.status(400).json({mssg: "There is no such event"})
    } 
    const event  = await Events.findById(params); 
    if(!event){ 
        return res.status(404).json({mssg: "There is no such event"});
    } 
    try { 
        const updatedEvent = await Events.findByIdAndUpdate({_id:id}, req.body, {new:true}); 
        return res.status(200).json(updatedEvent);
    }catch(error){ 
        return res.status(400).json({error: error})
    }
    
}


/* This route deletes and returns the event identified by the id in the parameters including all its information, 
otherwise returns an error message and status 4**
Method: Delete
Path: "api/events/:id" 
Returns: Status 200 and the event with id id 
or Status 4** and error code/description. 
*/
export const deleteEvent = async(req,res) =>{ 
    const eventId = req.params.id;  
    if (!mongoose.Types.ObjectId.isValid(eventId)){
        return res.status(400).json({mssg: "There is no such event"})
    }    
    try { 
        
        const event = await Events.findById(eventId);  
        if (!event){ 
            return res.status(422).json({mssg:"No such event was found"})
        } 
        await Events.findByIdAndDelete(eventId);

        return res.status(200).json(event);
    } catch (error) {
        console.log(error); 
         return res.json(400).json({error: error})
    }
}