import { useState } from "react"; 
import { MdLocationPin } from "react-icons/md";

export default function MemberCard({ member }) {
    const [isHovered, setIsHovered] = useState(false);

    return ( 
      <div className=" font-body shadow-lg rounded-lg w-[300px] flex flex-col justify-center items-center"> 
         <div
            className="relative w-full h-[350px] overflow-hidden rounded-lg cursor-pointer"
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
                src={member.flag}
                alt={`${member.name} Flag`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
            />
        </div> 
        <div className="w-full rounded-xl flex flex-col justify-center items-start p-3"> 
         <p className="text-xl text-bgcol font-semibold">{member.name} </p> 
         <p className="text-lg text-highlight font-medium">{member.title}</p> 
         <div className="flex flex-row"><MdLocationPin  /><p className="pl-1 text-lg">{member.country}</p></div>
        </div>
 
      </div>
        
    );
}
