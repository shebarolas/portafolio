import './App.css'
import { Hero } from './components/hero/Hero'
import { NavBar } from './components/navbar/NavBar'

function App() {
 

  return (
    <>
      <NavBar/>
      <div className="conteiner">
        <Hero/>
      </div>
    </>
  )
}

export default App
