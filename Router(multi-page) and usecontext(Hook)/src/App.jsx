import {useState , createContext} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { QueryClient , QueryClientProvider} from '@tanstack/react-query'
import './App.css'
import { Home } from './Pages/Home'
import { Profile } from './Pages/Profile'
import { Contact } from './Pages/Contact'
import { NavBar } from './NavBar'

export const Appcontext = createContext();//we have to use it like this and wrap all things that we want to use it on
//we export it so we can access in other .jsx we have created
function App() {
  /*We use router in react to have multiple pages in one html, here we use different paths as we see in real life website
  that is here the home page is in localhost:5173 which is the default port to run the react project, and then we add a route to 
  it as localhost:5173/menu where the menu page exists and then localhost:5173/constact where the contact page exists, now we have 
  created multiple pages all with the help of router and to use the router we should follow the same tags we have used here,
  we also have link tag form router-dom which allows us to direct to other pages without manually changing the link name
  by just clicking this we will be redirected*/
  //.Provider means we will be providing data to contents inside it and we have to sepicify what we want to pass it out
  //Now since we have used context we don't need props to pass values to components anymore
  const [username,setUsername] = useState("Dharani");
  const client = new QueryClient(); /*we have to use this as we used for appcontext and we can place anything inside the tag 
  for which we want the queries*/
  return (
    <Appcontext.Provider value={{username,setUsername}}>
      <div>
        <QueryClientProvider client={client}>
          <Router>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Profile' element={<Profile />}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='*' element={<h1>Page not found</h1>}/>
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
    </Appcontext.Provider>
  )
}

export default App
