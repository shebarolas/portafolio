import React from 'react'
import './contactinfo.css'

export const ContactInfo = ({url, icon}) => {
  return (
    <div className='contact-info-container'>
        <div className="iconos">
            <img src={icon} alt="" className='icons' />
        </div>
        <p>{url}</p>
    </div>
  )
}
