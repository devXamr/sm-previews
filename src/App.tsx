import './App.css'
import Preview from "./Components/Preview.tsx";
import SettingsPanel from "./Components/SettingsPanel.tsx";

function App() {

  return (
    <div className='flex justify-around'>
        <Preview/>
        <SettingsPanel/>
    </div>
  )
}

export default App
