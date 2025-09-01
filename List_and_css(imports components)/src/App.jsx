import './App.css' //here we are importing a css file where we can style 
import {User} from './User'  //Here we are not exporting as default so we have to use {User} to get correctly rendered
import {Planet} from './Planet.jsx' /*If we want to export as default we have to create a function instead of passing a function to a
variable*/
function App() {
  const age = 15;
  const a = age >= 18? <h3>OverAge</h3> : <h3>UnderAge</h3> ; // This is the short hand for if and else (conditional rendering)
  const isgreen = true;//if we want to directly add style to the html like we do, we have write it as {{}} , as it is a object here
  let names = ["Pedro","Dharani","Hari"] //This is a list or array in react and we use map function to access all of the element
  const users = [
    {name : "Dharani" , age:19},
    {name : "Pedro" , age:21},
    {name : "Aisha" , age:20},
  ]
  const Planets = [
    {name : "Mars" , isGasPlanet: false},
    {name : "Earth" , isGasPlanet: false},
    {name : "Juipter" , isGasPlanet: true},
    {name : "Venus" , isGasPlanet: false},
    {name : "Neptune" , isGasPlanet: true},
    {name : "Uranus" , isGasPlanet: true}
  ]
  return (
    <div>
      <h1 style={{color : isgreen?"green" : "red" , fontFamily:"cursive"}}>Hello world</h1>
      {a}
      <h2>{names[1]}</h2>
      {names.map((value,key)=>{ 
        return <h1>{value}</h1>
      })}
      {users.map((user,key)=>{
        return <User name={user.name} age = {user.age}/>
      })}
      {Planets.map((Planets,key)=>{
        return <Planet name={Planets.name} isGasPlanet={Planets.isGasPlanet}/>
      })}
    </div>
  )
}

export default App
