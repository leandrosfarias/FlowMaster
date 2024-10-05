// import Sidebar from "./components/Sidebar"
import Main from "./screens/Main/Index"

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div>
        <Main></Main>        
      </div>
    </>
  )
}

export default App
