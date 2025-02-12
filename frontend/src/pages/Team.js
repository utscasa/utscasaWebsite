import MemberCard from "../components/MemberCard" 
import { MemberInfo } from "../MemberDictionary"
export default function TeamPage() {
    return( 
        <div className="flex flex-col min-h-screen"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-24 px-[5%]"> {MemberInfo.map((member)=><MemberCard key={member.id} member={member}/>)}
        </div>
        
        </div>
    )
} 