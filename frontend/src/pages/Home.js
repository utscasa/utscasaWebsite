// This is the main file of the frontend. It is the first file that is run when the frontend is started.

function HomePage() {
    return (
      <div className="App">  
      {/* This is the section for the landing page */}
        <div className="w-full h-screen flex flex-col items-center justify-center"> 
          <p className="font-bold text-black text-4xl">African Student Association</p>
          <div className="bg-[#D9D9D9] w-full h-[50vh]"></div>
        </div>  
      {/* This is the section for the upcoming events */} 
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <p className="font-bold text-highlight text-4xl lg:pb-6" >Upcoming Events</p> 
        <div className="bg-[#D9D9D9] w-[60vw] h-[50vh] rounded-lg"></div>
      </div>
      {/* This is the section for the news letter */}  
      <div className="w-full h-screen bg-des1 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center overflow-hidden"> 
        <div className="bg-white w-[80vw] h-[80vh] rounded-lg flex flex-col items-center justify-start">
        <div className=" pt-6 pb-4 md:pt-10 md:pb-6 lg:pt-16 lg:pb-12 "> 
          <p className="text-highlight  text-2xl md:text-4xl lg:text-6xl font-semibold">Join Our News Letter!</p>
        </div> 
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full p-4 lg:px-20 md:px-16">
          <div>
            <img className="w-28 h-28" src="ASALOGO.png" alt="ASA Logo"/> 
            <div> 
              <p   className="text-highlight text-xl font-medium"> Stay Informed</p> 
              <p >Insert Description here</p>
            </div>
            </div> 
          <div className=' w-[80%] md:w-[40%]'>  
            <p className=' font-medium text-lg pb-2'>Enter your info below</p>
            <form className="flex flex-col ">  
            <input className="bg-placeholder rounded-md lg:p-3 mb-2 md:p-2" type="text" placeholder="Name" /> 
              <input className="bg-placeholder rounded-md lg:p-3 mb-2 md:p-2" type="text" placeholder="Email" /> 
              <button className="bg-highlight font-medium w-full rounded-lg py-2">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
        </div>  

      </div>
    );
  }
  
  export default HomePage;
  