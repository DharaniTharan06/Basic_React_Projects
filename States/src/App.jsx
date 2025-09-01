import './App.css';
import {useState} from 'react';//This is a Hook that is imported form react to create state

function App() {
  const [age,setAge] = useState(0); // This how we have to write a state , 0 is inital value of age(variable) and setAge is an function
  const Increase = ()=>{
    setAge(age+1); //HerewecallthesetAge func that will update the age by one each time the buttonis clicked and makes react to re-render 
  }
  const Decrease = ()=>{
    setAge(age-1);
  }
  const Reset = ()=>{
    setAge(0);// we can't directly use setAge in a event, we have use setAge fun inside another function to add it to event
  }

  const [value,setValue] = useState(0);
  const Count  = (event)=>{//We are getting the event as the input,then use .target.value to get the value from the input
    setValue(event.target.value.length);//.target.value means get the value from the input tag that gave the event parameter
  }

  const [tog,setTog] = useState(true);//This is a state to toggle between hidden and unhide of a text

  const [colour,setColor] = useState("red"); //This a state to change color of the text
  return (
    <div>
      {age} 
      <button onClick={Increase}>Increase Age</button>
      <button onClick={Decrease}>Decrease Age</button>
      <button onClick={Reset}>Reset age</button><br/>

      <input type='text' onChange={Count}/><br/>
      {value}<br/>

      <button onClick={()=>{setTog(!tog)}}>Show/Hide</button>
      {tog && <h1>This is showing/not hidden</h1>}<br/>

      <button onClick={()=>{setColor(colour==="red"? "green" : "red")}}>Change Color</button>
      <h1 style={{color : colour}}>Color is {colour}</h1>
    </div>
  )
}

export default App
