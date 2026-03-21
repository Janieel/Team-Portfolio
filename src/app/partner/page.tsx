import Heropartner from "@/Component/Heropartner/Heropartner";
import Teampartner from "@/Component/Teampartner/Teampartner";

export default function Page(){
    return(
         <div>
            <div className="mt-30 ">
               <Heropartner/>
               <Teampartner/>
            </div>
         </div>
    )
}