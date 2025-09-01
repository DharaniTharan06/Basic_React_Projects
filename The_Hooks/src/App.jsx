import {useToggle} from './useToggle'
import './App.css'
import { Person } from './components/Person'

function App() {
  const [Visibility, toggle] = useToggle(false)
  
  return (
    <div>
      <button onClick={toggle}>
        {Visibility? "Hide":"Show"}
      </button>
      {Visibility && <h1>Hidden text</h1>}
      {Visibility && (<Person name={"Dharani"} email={"sfdsad@gasd.com"} age={12} ismarried={true} friends={["jersi","Bharath","Virat"]}/>)}
    </div>
  )
}

export default App
