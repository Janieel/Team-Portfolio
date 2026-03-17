import TeamInfo from "../TeamInfo/TeamInfo"
import Teamwork from "../Teamwork/Teamwork"

const TeamCard = () => {
  return (
    <div>
        <div>
            <div className=' rounded-[10px] relative z-10  '>
                <TeamInfo/>   
            </div>
            <div className="relative z-20 bg-black pt-[100vh]">
               <Teamwork/>
            </div>
        
        </div>
    </div>
  )
}

export default TeamCard