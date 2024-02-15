import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import css from '../../assets/css-3.png'
import html from '../../assets/html-5.png'
import js from '../../assets/js.png'
import react from '../../assets/science.png'
import node from '../../assets/node-js.png'
import mysql from '../../assets/mysql.png'
import profile from '../../assets/profile.png'
import './hero.css'

export const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                {/* <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Construyendo la inspiración y haciendo realidad tus sueños',
                        3, // wait 1s before replacing "Mice" with "Hamsters"
                        'Construyendo la inspiración y haciendo realidad tus metas',
                        2000,
                        'Construyendo la inspiración y haciendo realidad tus ideas',
                        2000,
                    ]}
                    wrapper="h2"
                    speed={30}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                    className={'h2'}
                /> */}
                <h2>Construyendo la inspiración y haciendo realidad tus sueño</h2>
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Hola, Me llamo Sebastian y soy Desarrollador Frontend',
                        3000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Hola, Me llamo Sebastian y soy Desarrollador Backend',
                        3000,
                        'Hola, Me llamo Sebastian y soy Desarrollador Fullstack',
                        3000,
                    ]}
                    wrapper="p"
                    speed={25}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>

            <div className="hero-img">
                <div className='top'>
                    <div className="icon-pro">
                        <img src={react} alt="" className='icons' />
                    </div>
                    <img src={profile} alt="" className='profile' />
                </div>
                <div className='top'>
                    <div className="icon-pro">
                        <img src={html} alt="" className='icons' />
                    </div>
                    <div className="icon-pro">
                        <img src={css} alt="" className='icons' />
                    </div>
                    <div className="icon-pro">
                        <img src={js} alt="" className='icons' />
                    </div>
                    <div className="icon-pro">
                        <img src={node} alt="" className='icons' />
                    </div>
                    <div className="icon-pro">
                        <img src={mysql} alt="" className='icons' />
                    </div>
                </div>
            </div>
        </div>
    )
}
