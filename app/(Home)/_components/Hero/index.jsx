'use client';
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
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);  // حفظ عرض الشاشة الحالي في الحالة
    const isPhoneScreen = screenWidth <= 767;

    // استخدام useEffect لتحديث حجم الشاشة بشكل ديناميكي عند تغير حجم النافذة
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // تنظيف الاستماع للحدث عند إزالة المكون
        return () => {
            window.removeEventListener('resize', handleResize);
        };
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
                <motion.h1 
                    variants={marqueeVariants}
                    initial="animate"
                    animate={controls}
                >
                    We speak the language of internet and people alike.
                </motion.h1>
            </div>
        </div>
    );
};

export default Hero;
