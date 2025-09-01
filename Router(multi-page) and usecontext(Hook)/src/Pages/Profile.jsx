import { ChangeProfile } from "../Component/ChangeProfile"
import { useContext } from 'react'
import { Appcontext } from '../App'
/*we are getting the setUsername from the app then give it as props to changeprofile where it is used, so we need to make it 
less messy using context hook*/
export const Profile = ()=>{
    const {username,setUsername} = useContext(Appcontext)//This how we get data without props
    return(
        <div>
            <h1>Profile, username: {username}</h1>
            <ChangeProfile setUsername = {setUsername}/>
        </div>
    )
}