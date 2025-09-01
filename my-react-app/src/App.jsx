import React, { useState, useEffect } from "react";
import './App.css'

const Header = () => {
  return (
    <header style={{ background: "#888", color: "white", padding: "10px", textAlign: "center" }}>
      <h1>My Personal Dashboard</h1>
      <h2>Dharani Tharan D</h2>
    </header>
  );
};

const Greeting = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return <h2 style={{ textAlign: "center" }}>{greeting}</h2>;
};

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Task" />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

const ProfileCard = ({ name, photo, bio }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", textAlign: "center", maxWidth: "300px", margin: "auto" }}>
      <img src={photo} alt={name} style={{ width: "100px", borderRadius: "50%" }} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};


const ToggleInfo = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Info</button>
      {show && <p>This is additional information!</p>}
    </div>
  );
};

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ name, email });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Submitted: {submitted.name} ({submitted.email})</p>}
    </div>
  );
};


const Weather = () => {
  const weatherData = { city: "Salem", temperature: "22°C", condition: "Moody" };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Weather in {weatherData.city}</h3>
      <p>{weatherData.temperature}, {weatherData.condition}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer style={{ background: "#888", color: "white", padding: "10px", textAlign: "center", marginTop: "20px" }}>
      <p>Dharani Tharan D | (23BCE1646) | All Rights Reserved. | 2025</p>
    </footer>
  );
};


const App = () => {
  return (
    <div>
      <Header />
      <Greeting />
      <ClickCounter />
      <TodoList />
      <ProfileCard name="Dharani Tharan.D" photo="https://wallpaperaccess.com/full/59110.png" bio="A passionate web developer." />
      <ToggleInfo />
      <UserForm />
      <Weather />
      <Footer />
    </div>
  );
};

export default App;
