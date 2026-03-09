import TeamInfo from "../TeamInfo/TeamInfo"
import Teamwork from "../Teamwork/Teamwork"

const TeamCard = () => {
  return (
    <div>
        <div>
            <div className=' rounded-[10px] '>
                <TeamInfo/>   
            </div>
            <div className="mt-40">
               <Teamwork/>
            </div>
        
        </div>
    </div>
  )
}

export default TeamCard