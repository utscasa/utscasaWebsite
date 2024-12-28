import express from "express" 
import Events from "../models/eventModel.mjs" 
import { createEvent, deleteEvent, getAllEvents, getEvent } from "../controllers/eventController.mjs";

const router = express.Router() 

/* This route returns all the events that are in the database including all their information
Method: GET 
Path: "api/events/" 
Returns: Status 200 and all events in the database 
or Status 400 and error code. 
*/
router.get('/', getAllEvents)  

/* This route returns the event identified by the id in the parameters including all its information
Method: GET 
Path: "api/events/:id" 
Returns: Status 200 and the event with id id 
or Status 400 and error code. 
*/
router.get('/:id', getEvent)  


/* Given a title, date, startTime, endTime, and location in the correct formats
 returns the event added to the database including all its information
Method: POST
Path: "api/events/" 
Returns: Status 200 and the event with id id 
or Status 400 and error code. 
*/
router.post('/', createEvent); 

/* This route given a valid id of an event will delete the event with the corresponding Id
,if not a valid id will return not a valid id, otherwise will return error 
Method: Delete 
Path: "api/events/:id"  
Returns: Status 200 and the event with id id, Status 404 and id not found, status 400 and error code. 

*/
router.delete('/:id',deleteEvent);  


router.patch('/:id', async(req, res)=> { 

})
    

export default router