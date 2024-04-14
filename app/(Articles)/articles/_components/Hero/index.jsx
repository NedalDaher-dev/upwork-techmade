'use client';

import React from 'react';
import './index.styles.scss'
import Textfill from '@/hooks/text/TextFill';
const Hero = () => {


    return (
        <div className="hero-wrapper">
           <div className="hero-container"> 
           <Textfill tagType='h1' wordsPerLineArray={[3, 3, 3]} >
                Hear the passion from our spirited team!
            </Textfill>
            <p>Unleash the latest buzz, captivating perspectives, and dynamic insights on brands, language, and the ever-evolving web!</p>
           </div>
        </div>
    )
}

export default Hero;