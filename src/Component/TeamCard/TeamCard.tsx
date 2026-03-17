import TeamInfo from "../TeamInfo/TeamInfo"
import Teamwork from "../Teamwork/Teamwork"

const TeamCard = () => {
  return (
    <div>
        <div>
            <div className=' rounded-[10px] '>
                <TeamInfo/>   
            </div>
            <div className="relative z-20 pt-[100vh] sm:pt-0">
               <Teamwork/>
            </div>
        
        </div>
    </div>
  )
}

export default TeamCard