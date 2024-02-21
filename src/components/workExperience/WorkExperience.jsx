import React, { useRef } from 'react'
import './workexperience.css'
import { Workexperience } from '../../Data'
import { ExperienceCard } from './experienceCards/ExperienceCard'
import Slider from "react-slick";

export const WorkExperience = () => {
    const slideRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    const slideRight = () => {
        slideRef.current.slickNext();
    }
    const slideLeft = () => {
        slideRef.current.slickPrev();
    }

    return (
        <div className='experience-container'>
            <h5>Work Experience and Personal Proyects</h5>
            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight}>
                    <spam className="material-symbols-outlined">
                        chevron_right
                    </spam>
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <spam className="material-symbols-outlined">
                        chevron_left
                    </spam>
                </div>
                <Slider ref={slideRef} {...settings}>
                    {
                        Workexperience.map((item) => (
                            <ExperienceCard key={item.title} detalle={item} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
