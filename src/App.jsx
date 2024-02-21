import './App.css'
import { Hero } from './components/hero/Hero'
import { NavBar } from './components/navbar/NavBar'
import { Skills } from './components/skills/Skills'

function App() {
 

  return (
    <>
      <NavBar/>
      <div className="conteiner">
        <Hero/>
        <Skills/>
      </div>
    </>
  )
}

export default App
