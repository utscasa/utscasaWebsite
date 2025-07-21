export default function SmallEventCard({event}){ 
    return( 
        <div className="w-[95vw] sm:w-[350px] min-h-[250px] flex flex-col justify-between m-2 shadow-md rounded-md"> 
            <div className="bg-bgcol h-[40px] w-full rounded-md flex flex-row items-center">
                <h4 className="text-white font-semibold pl-2">{event.date}</h4>
            </div>
            <div className="min-w-full h-[200px] flex flex-col items-start justify-evenly py-2 px-4 ">
                <h3 className="font-body font-bold">{event.title}</h3> 
                <p className="font-body break-all ">{event.description}</p>  
                <button className="w-[110px] h-[40px] hover:w-[105px] hover:h-[35px] hover:m-[2.5px] rounded-lg p-2 bg-highligth-lighter font-body text-black text-sm  font-semibold">Learn More</button>

            </div>
        </div>
    )
}