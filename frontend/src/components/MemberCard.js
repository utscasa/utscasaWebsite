import { useState } from "react";

export default function MemberCard({ member }) {
    const [isHovered, setIsHovered] = useState(false);

    return ( 
      <div className="p-8"> 
         <div
            className="relative w-64 h-72 overflow-hidden rounded-xl cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Headshot Image */}
            <img
                src={member.pic}
                alt={`${member.name} Headshot`}
                className={`w-full h-full object-cover transition-all duration-500 ${
                    isHovered ? "blur-sm brightness-75" : "blur-0 brightness-100"
                }`}
            />

            {/* Flag Overlay */}
            <img
                src={member.country}
                alt={`${member.name} Flag`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
            />
        </div> 
        <div> 
         <p className="text-2xl text-black">{member.name} </p> 
         <p className="text-lg text-slate-600">{member.title}</p>
        </div>
 
      </div>
        
    );
}
