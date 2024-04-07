import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.styles.scss';
import Button from '@/components/Button/index';

const Hero = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            delay: 500, // Delay start of animation by half a second
            duration: 1200, // Duration of animation
            once: false, // Specify whether animation should fire more than once
        });
    }, []);

    // To ensure AOS animations are triggered after page load, you can set a timeout
    // This can be handled by a useEffect that will refresh AOS to apply animations
    useEffect(() => {
        const handleLoad = () => {
            // Timeout to reinitialize AOS after page load
            setTimeout(() => {
                AOS.refresh();
            }, 500); // Wait for half a second after page load
        };

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);
    }, []);

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
                    <Button description={'techmadeagency@techmade.com'}>EMAIL US</Button>
                    <Button description={'Book a call with our experts.'}>START YOUR PROJECT</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
