import React, { useState } from 'react'
import { Skill } from '../../Data'
import './skills.css'
import { SkillsCards } from './skillsCards/SkillsCards'
import { SkillsInfo } from './skillsCards/skillsInfo/SkillsInfo'

export const Skills = () => {
  const [selectSkills, setSelectSkills] = useState(Skill[0]);
  const handleSelectSkills = (data) => {
      setSelectSkills(data);
  }
  return (
    <div className='skills-container'>
        <h5>Habilidades Tecnicas</h5> 
        {
          console.log(Skill)
        }
        <div className="skills-content">
          <div className="skills">
            {
              Skill.map((item) => (
                <SkillsCards
                  title={item.title}     
                  icons={item.icons}
                  key={item.title}    
                  isActive={selectSkills.title === item.title} 
                  onClick={() => handleSelectSkills(item)}      
                />
              ))
            }
          </div>
          <div className="skills-info">
              <SkillsInfo
                heading={selectSkills.title}
                skills={selectSkills.skills}
              />
              {
                console.log(selectSkills.skills)
              }
          </div>
        </div>  
    </div>
  )
}
