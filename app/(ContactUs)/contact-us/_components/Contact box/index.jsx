import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.styles.scss';
import { InputContact } from '@/data/InputData';
import { SelectOption } from '@/data/SelectOptionData';
import ArrowStraight from '@/assets/Icons/ArrowStraight';
import '@/styles/index.scss';

const ContactUs = () => {
    // Initialize AOS
    useEffect(() => {
        const AOSInit = () => {
            AOS.init({
                delay: 500, // Delay can be changed per your requirement
                duration: 1200,
                once: false, // Set to true if animation should happen only once
            });
        };

        // If AOS needs to be initialized after page load
        if (document.readyState === 'complete') {
            AOSInit();
        } else {
            window.addEventListener('load', AOSInit);
        }

        // Clean up the event listener
        return () => window.removeEventListener('load', AOSInit);
    }, []);

    return (
        <div className="contact-box-wrapper" >
            <div className="contact-box-container">
                <div className="contact-box-inputs" data-aos="fade-right" data-aos-delay="600">
                    {InputContact.map((input) => (
                        <div key={input.id} className="input-container">
                            <label htmlFor={input.id}>{input.label}</label>
                            <input type="text" id={input.id} placeholder={input.label} />
                        </div>
                    ))}
                </div>
                <div className="contact-box-select" data-aos="fade-left" data-aos-delay="700">
                    <h1>Select Subject?</h1>
                    <div className="options">
                        {SelectOption.map((option) => (
                            <label className="option" key={option.id}>
                                <input type="radio" name="subject" value={option.id} />
                                <span className="label-text">{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="contact-box-textarea" data-aos="fade-up" data-aos-delay="800">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="10" name="message" placeholder="Type your message here..." />
                </div>
                <div className='contact-box-button' data-aos="fade-up" data-aos-delay="900">
                    <div className='buttonWrapper'>
                        <button type="button" className="button">
                            SEND US A MESSAGE
                        </button>
                        <div className="arrow-circle">
                            <ArrowStraight className='arrow' color="white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
