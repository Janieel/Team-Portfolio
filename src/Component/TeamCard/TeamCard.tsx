import TeamInfo from "../TeamInfo/TeamInfo"
import Teamwork from "../Teamwork/Teamwork"

const TeamCard = () => {
  return (
    <div>
        <div>
            <div className=' rounded-[10px] '>
                <TeamInfo/>   
            </div>
            <div className=" mt-50 sm:mt-30 relative z-10  pt-[50vh] sm:pt-0">
               <Teamwork/>
            </div>
        
        </div>
    </div>
  )
}

export default TeamCard