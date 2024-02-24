import React from 'react'
import './contact.css'
import { ContactInfo } from './contactInfo/ContactInfo'
import email from '../../assets/gmail.png'
import github from '../../assets/github.png'
import { ContactForm } from './contactForm/ContactForm'

export const Contact = () => {
  return (
    <div className='contact-container'>
        <h5>Contactame </h5>
        <div className="contact-content">
            <div className="">
                <ContactInfo url={"sebapereira393@gmail.com"} icon={email}/>
                <ContactInfo url={"https://github.com/shebarolas"} icon={github}/>
            </div>
            <div className="">
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}
