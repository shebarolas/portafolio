import React from 'react'
import './experiencecard.css'

export const ExperienceCard = ({detalle}) => {
    
  return (
    <div className='experience-card'>
        <h6>{detalle.title}</h6>
        <div className="work-duration">
            {detalle.date}
        </div>
        <ul>
            {
                detalle.description.map((desc,index)=>(
                    <li key={index}>{desc}</li>
                ))
            }
        </ul>
    </div>
  )
}
