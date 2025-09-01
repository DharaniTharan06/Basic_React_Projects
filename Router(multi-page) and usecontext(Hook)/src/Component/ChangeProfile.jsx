import {useState} from 'react' //We have to import it each time we use it in a new file
import { useContext } from 'react'
import { Appcontext } from '../App'
export const ChangeProfile = ()=>{
    const {setUsername} = useContext(Appcontext)
    const [newusername,setNewusername] = useState("");
    return (
        <div>
            <input onChange={(event)=>{setNewusername(event.target.value)}}/>
            <button onClick={()=>{setUsername(newusername)}}>Change UserName</button>    
        </div>
    )
}