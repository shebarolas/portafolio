import './App.css'
import { Contact } from './components/contact/Contact'
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
        <Contact/>
      </div>
    </>
  )
}

export default App
