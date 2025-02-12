import { useState } from 'react';
export default function MemberCard({ member }) { 
    const [source, setSource] = useState(member.pic);
     return( 
      <div className='flex flex-col items-center justify-center p-8'>    
      {/* This is the image containter */}
         <div> 
            <img className='max-h-60 max-w-60' alt='Member Name' src={source} onMouseEnter={() => setSource(member.country)} onMouseLeave={() => setSource(member.pic) }/> 
         </div>  
      {/* This is the text tainer */}
         <div> 
            <div className='text-2xl text-black'><p>{member.name}</p></div>
            <div className='text-lg text-slate-600'><p>{member.title }</p></div>
         </div>


      </div>

     )

}  

/** 
 This function takes the information of each member and displays it in a card format.
 The card format includes an image followed by the name of the member and their role in the team. 
 On  hovering the image, the image changes to the an image of the country they are from.
 */