import { MdOutlineMail } from "react-icons/md"; 
import { FaInstagram } from "react-icons/fa"; 
import { CiLinkedin } from "react-icons/ci";
import { PiTiktokLogo } from "react-icons/pi"; 

export default function ContactPage() { 

    return( 
        <div className="bg-des2 min-h-screen w-screen flex flex-col items-center justify-center"> 
            <div className="bg-white w-[80vw] min-h-[80vh] rounded-lg flex flex-col items-center justify-start">  
                <h1 className=" text-highlight text-2xl lg:text-5xl font-semibold py-16 ">Contact Us</h1> 
                {/* These are gonna be out contact links*/}
                <div className="flex flex-col items-stretch justify-center space-y-4">   
                    <div className=" flex flex-row items-center  pb-6"> <MdOutlineMail size={48} /><a target='_blank' rel="noreferrer" href='mailto:asa.utsc@studentorg.utoronto.ca'><h3 className=" text-base md:text-xl lg:text-3xl font-medium md:pl-6" >asa.utsc@studentorg.utoronto.ca</h3></a></div>
                    <div className="flex flex-row items-center pb-6"><FaInstagram size={48} />    <a  target='_blank' rel="noreferrer" href="https://www.instagram.com/utscasa/"><h3 className=" text-base md:text-xl lg:text-3xl font-medium md:pl-6 " >@utscasa</h3></a></div> 
                    <div className="flex flex-row items-center pb-6"> <CiLinkedin size={48} /><a   target='_blank' rel="noreferrer"href="https://www.linkedin.com/in/utsc-african-students-association-2451b8129/"><h3 className="text-base md:text-xl lg:text-3xl font-medium md:pl-6" > @UTSC African Students’ Association</h3></a></div> 
                    <div className="flex flex-row items-center       pb-6"><PiTiktokLogo  size={48}/><a   target='_blank' rel="noreferrer"href="https://www.tiktok.com/@utscasa"><h3 className=" text-base md:text-xl lg:text-3xl font-medium md:pl-6" >@utscasa</h3></a></div>

                </div>

            </div>

        </div>
    )
} 