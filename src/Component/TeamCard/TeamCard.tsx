import TeamInfo from "../TeamInfo/TeamInfo"
import Teamwork from "../Teamwork/Teamwork"

const TeamCard = () => {
  return (
    <div>
        <div>
            <div className=' rounded-[10px] '>
                <TeamInfo/>   
            </div>
            <div className=" mt-20 sm:mt-30 relative z-10  pt-[70vh] sm:pt-0">
               <Teamwork/>
            </div>
        
        </div>
    </div>
  )
}

export default TeamCard