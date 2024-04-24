import React, { useEffect, useRef, useState } from 'react';
import './index.style.scss';
import useAos from '@/hooks/useAos';
import SubMenu from '../SubMenu';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
    useAos();
    const controls = useAnimation();
    const [position, setPosition] = useState(0);
    const ref = useRef(null);
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);  // Initialize safely
    const isPhoneScreen = screenWidth <= 767;

    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setScreenWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            // Cleanup listener when component unmounts
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        controls.start('animate');
    }, [controls]);

    const marqueeVariants = {
        animate: {
            x: isPhoneScreen ? [0, 0] : [1500, -1500],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
                rest: 0.5
            }
        }
    };

    return (
        <div className='hero__container'>
            <div className='hero_main'>
                <h1>We speak the language of internet and people alike.</h1>
            </div>
        </div>
    );
};

export default Hero;
