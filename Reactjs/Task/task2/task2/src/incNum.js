import { useState } from "react";
function Hooks(){
    const [cnt,setcnt]=useState(0)
    const incrBy =()=>{
        setcnt(cnt+1)
    }
    return(
        <div>
            <p>{cnt}</p>
            <button onClick={incrBy}>Incr By 1</button>
        </div>
    )
}
export default Hooks