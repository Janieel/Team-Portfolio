import TeamCard from "../TeamCard/TeamCard"

const Team = () => {
  return (
    <div>
         <div className='mt-40'>
          <div className='flex items-center  '> <div className='h-[3px] w-[30px]  bg-white ml-20'></div> <span className="ml-3 text-[#ff6584]">THE CREW</span></div> 
          <div>
              <span className='font-black text-[3rem] ml-20 text-white'>MEET OUR TEAM</span>
          </div>
          <div>
            <span className='font-serif text-[1.2rem] ml-20 text-[#9d9cb9]'>Diverse backgrounds, one shared vision. We believe great products come from great people working in sync.</span>
          </div>
          <div>
              <TeamCard/>
          </div>
        </div>
    </div>
  )
}

export default Team