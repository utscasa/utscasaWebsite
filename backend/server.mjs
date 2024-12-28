import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import eventsRoutes from "./routes/events.mjs" 


const app = express();  
dotenv.config(); 


app.use(express.json()); 

// middleware  
app.use(function(req,res,next){
    console.log("HTTP Request", req.method, req.url);
    next();
}); 

app.use('/api/events',eventsRoutes)
// Test route for 
app.get('/',(req,res)=>{ 
return res.json({mssg: "Welcome to ASA"})
}) 

// Connection to the Database  
mongoose.connect(process.env.MONGO_URI).then(
    app.listen(process.env.PORT,()=>{
        console.log("DB connected and Listening on port", process.env.PORT)
    })
).catch((error)=>{ 
    console.log(error)
})
 
