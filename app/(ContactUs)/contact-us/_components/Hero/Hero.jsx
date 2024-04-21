import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.styles.scss';
import Button from '@/components/Button/index';
import useAos from '@/hooks/useAos';
import useCalendlyPopup from '@/hooks/useCalendlyPopup'; // استيراد الهوك من ملفه

const Hero = () => {




    // Initialize AOS on component mount
    const handleCalendlyPopup = useCalendlyPopup('https://calendly.com/umer-techmade/chat-with-umer-techmade');
    useAos();
    return (
        <div className="hero-wrapper">
            <div className="hero-container">
                <div
                    className="hero-text"
                    data-aos="fade-up" // Animation type 
                    data-aos-delay="500" // Additional delay for the animation
                >
                    <p>REACH OUT</p>
                    <h1>Driven to achieve, committed to enjoy.</h1>
                </div>
                <div
                    className='button-Wrapper'
                    data-aos="fade-up"
                    data-aos-delay="750" // Stagger the button animation slightly more
                >
                    <div className='button_container'>
                        <Button className={'button_purple'} text='EMAIL US' />
                        <div className='sub_text'>
                            <p>umer@techmade.co.uk</p>
                        </div>
                    </div>
                    <div className='button_container'>
                        <Button className={'button_purple'} onClick={handleCalendlyPopup} text='SCHEDULE A CALL' />
                        <div className='sub_text'>
                            <p>Book a call with our experts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
