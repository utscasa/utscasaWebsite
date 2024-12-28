import mongoose, { Schema }  from "mongoose";

const schema  = mongoose.Schema; 

const EventScehma = new schema({ 
    title:{
        type: String, 
        required: true,
    }, 
    poster:{ 
        type: String, 
    }, 
    date:{ 
        type: Date, 
        required:true,
    }, 
    startTime:{
        type: String, 
        required:true,
    }, 
    endTime:{
        type: String, 
        required:true,
    }, 
    location:{
        type: String, 
        required:true,
    },
}, {timestamps:true}) 

export default mongoose.model('Events', EventScehma)
