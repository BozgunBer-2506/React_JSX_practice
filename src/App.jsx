import { useState } from 'react' 
import './App.css'
import Greeting from './Greeting' 
import ProfileCard from './ProfileCard' 
import LikeCounter from './LikeCounter'

function App() {
  const [count, setCount] = useState(0); 
  const title = "React Setup & JSX Übung"; 

  return (
    <div className="app">
      <h1>{title}</h1>
      
      <Greeting /> 
      <hr />
      <ProfileCard /> 
      <hr />

      <LikeCounter />

      <hr />

      <div className="interaktiv-section" style={{ marginTop: '20px' }}>
        <h3>Interaktiver Teil:</h3>
        <p>Klicks: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Klick mich!
        </button>
      </div>
    </div>
  )
}

export default App