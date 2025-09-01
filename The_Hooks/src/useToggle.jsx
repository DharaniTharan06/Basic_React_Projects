import {useState} from 'react'
//Here in an hook we don't return an ui we return an logic 
export const useToggle = (initialval = false)=>{
    const [state, setSatate] = useState(initialval)
    const toggle = ()=>{setSatate((prev)=>!prev)}
    return [state,toggle]//see we are not returning a ui here rather a logic ie a value
    //here we return it as an array as if we return it as an object but if we do we can't name our variables as we want
}
