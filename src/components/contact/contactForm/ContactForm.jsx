import React from 'react'
import './contactform.css'

export const ContactForm = () => {
  return (
    <div className='cont-form-container'>
        <form action="" className='form'>
            <div className="name-container">
                <input type="text" name='nombre' placeholder='Nombre' />
                <input type="text" name='apellido' placeholder='Apellido' />
            </div>
            <input type="email" name='email' placeholder='Email' />
            <textarea type="text" name="message" placeholder='Message'></textarea>
            <button>Enviar</button>
        </form>
    </div>
  )
}
