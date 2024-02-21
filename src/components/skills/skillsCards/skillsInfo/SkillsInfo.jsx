import React from 'react'
import './skillinfo.css';
export const SkillsInfo = ({ heading, skills }) => {
  return (
    <div className='skills-info-card'>
      <h6>{heading}</h6>
      <div className="skill-info-content">
        {
          skills.map((item, index) => (
            console.log(item),
            <div key={index} className="skill">
              <div className="skill-info">
                <p>{item.skill}</p>
                <p className='porcentaje'>{item.porcentaje}</p>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress" style={{ width: item.porcentaje }}></div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
