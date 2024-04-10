import { useState } from 'react'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(0);
  
  const Increase = () => {
    setCounter(Counter + 1);
    
  }
  const Decrease = () => {
    setCounter(Counter - 1);
  }
  if(Counter > 20){
    Counter = 20;
  }else if (Counter <= 0){
    Counter = 0;
  }
  // range 0 - 20

  return (
    <>
    <h1>Vite + React</h1>
    <h2>Counter Value: {Counter}</h2>
    <hr />
    <button onClick={Increase}>
      Increase
    </button>
    <hr />
    <button onClick={Decrease}>
      Decrease
    </button>
    </>
  )
}

export default App
