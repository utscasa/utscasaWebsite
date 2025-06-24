

export default function BecomeMemberSection(){ 
    return(
        <section className="font-body flex flex-col items-center justify-center h-[50vh] bg-bgcol w-full text-white">
        <div className="flex flex-col items-center justify-center mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Become a part of our vibrant community and participate in our events and initiatives.
          </p>
          <button className="bg-highligth-lighter h-[42px] w-[196px] hover:w-[192px] hover:h-[38px] hover:m-[2px] rounded-md font-medium text-lg ">
            <a href="#join">Become a Member</a>
          </button> 
          
        </div>
      </section>
    )
}