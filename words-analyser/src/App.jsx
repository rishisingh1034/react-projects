import './App.css'
import Toggle from './components/Toggle';
import useLocalStorage from 'use-local-storage';
import Box from './components/Box';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div >
          <h1 className="title">Word Analyser</h1>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>
      <div className="box">
        <Box className="area"/>
      </div>
    </div>
  )
}

export default App
