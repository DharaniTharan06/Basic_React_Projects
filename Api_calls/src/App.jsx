import { useState, useEffect } from 'react'
import './App.css'
import Axios from "axios"
function App() { 
  const [Fact,setFact] = useState("");
  const [Name,setName] = useState("");
  const [Age,setAge] = useState(0);
  /*const Genfact = ()=>{
    fetch("https://catfact.ninja/fact")
    .then((res)=>{ return res.json()})
    .then((data)=>{ //The data is in the form of object ({fact:"catfacts"}) so we use data.fact
      setFact(data.fact);
    });
  }*///we can use the above the does the tradional call using fetch or the bellow one
  const Genfact = ()=>{
    Axios.get("https://catfact.ninja/fact") //Here since we are using axios we don't have to jsonlyfy the data
    .then((res)=>{
      setFact(res.data.fact);
    });
  }
  const Genage = ()=>{
    Axios.get(`https://api.agify.io/?name=${Name}`)//Here name is a property and we have given it like this here
    .then((res)=>{
      setAge(res.data.age);
    })
  }
  /*useEffect(()=>{
    Genfact() /*This function get called when we first open the website as the page is renderd useeffect calls call() twice 
    as we are in strict mode
  },[])*/
  return (
    <div className='App'>
      <button onClick={()=>{Genfact()}}>Generate Cat Fact</button>
      <p>{Fact}</p>
      <input type='text' placeholder='Enter Name' onChange={(event)=>{setName(event.target.value)}}/>
      <button onClick={()=>{Genage(Name)}}>Predect Age</button>
      <p>Predicted Age: {Age}</p>
    </div>
  )
}

export default App
