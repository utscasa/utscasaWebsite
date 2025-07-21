export default function SuggestEventSection(){
     return ( 
        <section className="w-full sm:h-[200 px] font-body flex flex-col justify-center items-center my-10"> 
            <div className="w-[90%] h-[300px] sm:h-[200px] rounded-xl bg-bgcol text-white pl-6  flex flex-col justify-center items-start"> 
                <div>
                    <h2 className="text-3xl font-bold mb-4">Suggest an Event</h2> 
                    <p className="text-xl mb-6">Have an idea for an event? We welcome suggestions from our members and the broader community!</p> 
                    <button className="w-[250px] h-[50px] hover:w-[245px] hover:h-[45px] hover:m-[2.5px] rounded-lg p-2 bg-highligth-lighter font-body text-black text-lg  font-semibold">Submit an Event Idea</button>
                    </div>
            </div>
        </section>
        
     )
}