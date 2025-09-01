import {Link} from 'react-router-dom' //we have to import this as we are using Link in this file
export const NavBar = ()=>{
    return(
        <div>
          <Link to='/'>Home</Link>
          <Link to='/Profile'>Profile</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
    )
} 