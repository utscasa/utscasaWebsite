import MemberCard from "../components/MemberCard" 
import { MemberInfo } from "../data/MemberDictionary"
export default function TeamPage() {
    return( 
        <div className="min-h-screen mt-[20%] sm:mt-[5%] flex flex-col justify-center items-center mb-16">  
        <h1 className="text-highlight text-3xl sm:text-5xl font-medium px-2 pb-4 sm:pb-[2%] text-center">Meet Our Team</h1> 
        <h2 className="pb-[5%] font-medium text-xl text-center">Our association is led by a dedicated team of students who work tirelessly to create a vibrant community and organize meaningful events.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-24 px-[5%]"> {MemberInfo.map((member)=><MemberCard key={member.id} member={member}/>)}
        </div>
        </div>
    )
} 