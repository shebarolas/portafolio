import './App.css'
import { Hero } from './components/hero/Hero'
import { NavBar } from './components/navbar/NavBar'
import { Skills } from './components/skills/Skills'
import { WorkExperience } from './components/workExperience/WorkExperience'

function App() {
 

  return (
    <>
      <NavBar/>
      <div className="conteiner">
        <Hero/>
        <Skills/>
        <WorkExperience/>
      </div>
    </>
  )
}

export default App
