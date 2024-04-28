import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.styles.scss';
import { InputContact } from '@/data/InputData';
import { SelectOption } from '@/data/SelectOptionData';
import ArrowStraight from '@/assets/Icons/ArrowStraight';
import Button from '@/components/Button';
import '@/styles/index.scss';
import useAos from '@/hooks/useAos';

const ContactUs = () => {
    // Initialize AOS

    return (
        <div className="contact-box-wrapper" >
            <div className="contact-box-container">
                <div className="contact-box-inputs" >
                    {InputContact.map((input) => (
                        <div key={input.id} className="input-container">
                            <label htmlFor={input.id}>{input.label}</label>
                            <input type="text" id={input.id} placeholder={input.label} />
                        </div>
                    ))}
                </div>
                <div className="contact-box-select" >
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
                <div className="contact-box-textarea" >
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="10" name="message" placeholder="Type your message here..." />
                </div>
                <div className='contact-box-button' >
                        <Button className={'button_purple button_purple_contact'} text="Send Message" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
