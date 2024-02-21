import React from 'react'
import "./skillscards.css"


export const SkillsCards = ({title, icons, isActive, onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
    onClick={()=> onClick()}
    >
        <div className="skills-icon">
            <img src={icons} alt={title} className='icons' />
        </div>
        <span>{title}</span>
    </div>
  )
}