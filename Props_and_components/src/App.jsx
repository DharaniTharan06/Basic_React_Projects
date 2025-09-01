import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = <h3>My name is Dharani</h3> // this is the jsx , this won't be allowed in js
  const age = <h3>My age is 19</h3>
  const email = <h3>duraidharani@gmail.com</h3>
  const user = (<div>
    {name}
    {age}
    {email}
  </div>
  ) //used parenthesis as we have written more than one line 
  const getname = ()=>{return "Dharani";}; // Not a component, call this as {getname()} not {getname}
  const GetnameComponent = ()=>{return <h1>Dharani</h1>} // This is a component as it return a jsx,and starts with a capital letter
  const User = ()=>{
    return (
      <div>
        <h3>My name is {getname()}</h3>
        {age}
        {email}
      </div>
    )
  }
  const Userp = (props)=>{ // Here we can't pass arguments in react ,as we did in js, so we use props which is a object
    return (
      <div>
        <h3>{props.name}</h3>
        <h3>{props.age}</h3>
        <h3>{props.email}</h3>
      </div>
    )
  }
  //if we call this as {user} , it referses it and does not render
  //so we have to call it as an html, that is <USer /> or <User></User>
  const Job = (props)=>{
    return (
      <div>
        <h3>{props.salary}</h3>
        <h3>{props.position}</h3>
        <h3>{props.company}</h3>
      </div>
    )
  }
  return (
    <div>
      <h1>Hello World</h1>
      <GetnameComponent/>
      <User />
      <Userp name="Hari" age={20} email = "Hari@gamil.com" />
      <Job salary={90000} position="Junior SDE" company="Google"/>
    </div>
  )
}

export default App
