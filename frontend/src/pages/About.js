export default function AboutPage() { 

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start"> 
        <div> 
            <div className="flex flex-row justify-center items-center pt-[10vh]"> 
                <p className="font-semibold text-black text-6xl pr-2">Proudly</p> 
                <p className="font-semibold text-highlight text-6xl"> African</p> </div> 
            </div>

          {/* Tier one */}
          <div className="flex flex-row justify-center items-center pt-[10vh]"> 
            <div className="w-[35%] bg-placeholder h-full rounded-lg"></div> 
            <div className="w-[35%] pl-4"><p>
                The African Students' Association (ASA) is a 
                student-run organization at the University of Toronto. 
                Our mission is to create an inclusive environment that celebrates 
                the unique contributions of African students while fostering love, acceptance, 
                and a strong sense of community.
                </p></div>
          </div>
            {/* Tier two */}
          <div className="flex flex-row justify-center items-center pt-[10vh]"> 
            <div className="w-[35%] pr-4" > <p> 
            Through a diverse range of programs and events, 
            we aim to celebrate African heritage and foster a 
            sense of belonging among African students. Our annual 
            events include cultural festivals, academic workshops, and 
            social gatherings, all designed to create a supportive and engaging community.
                </p></div> 
            <div className="w-[35%] bg-placeholder h-full rounded-lg"></div>
            </div> 
            {/* Tier three */}
          <div className="flex flex-row justify-center items-center pt-[10vh]">   
            <div className="w-[35%] bg-placeholder h-full rounded-lg"></div> 
            <div className="w-[35%] pl-4"><p> ASA is deeply committed to advoc
                acy and the promotion of social justice, working to ensure that the 
                campus is an equitable space for all African students. We engage in various
                 initiatives to raise awareness about issues affecting the African community and 
                 to support our members in their academic and personal growth
                 </p></div>
            </div> 
        </div> 
    )
} 