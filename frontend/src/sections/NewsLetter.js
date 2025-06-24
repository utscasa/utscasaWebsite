import { CiMail } from "react-icons/ci";
export default function NewsLetterSection(){ 
    return(
        <section className="w-full h-screen sm:h-[75vh] font-body bg-des1 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center overflow-hidden"> 
            <div className="bg-white w-[80vw] min-h-[80%] rounded-lg flex flex-col items-center justify-center"> 
                <CiMail className="w-20 h-16 text-highligth-lighter mb-4" />
                <h2 className="font-bold text-4xl text text-bgcol text-center">Stay Connected with ASA</h2> 
                <h3 className="p-6 text-center text-xl font-medium text-bgcol">Get the lastess updates on events, cultural celebrations, and community news delivered straight to your inbox</h3> 
                <button className="bg-highligth-lighter h-[42px] w-[156px] hover:w-[152px] hover:h-[38px] hover:m-[2px] rounded-md font-medium text-xl ">Subscribe</button> 
                <p className="text-md font-medium mt-4 text-center text-bgcol ">Join our vibrant student body staying informed about ASA activities</p>
            </div>
            
        </section>
    )
}