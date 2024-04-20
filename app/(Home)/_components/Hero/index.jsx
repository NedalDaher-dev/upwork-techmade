'use client';
import React, { useEffect, useRef, useState } from 'react';
import './index.style.scss';
import useAos from '@/hooks/useAos';
import SubMenu from '../SubMenu';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
    useAos();
    const controls = useAnimation();
    const [position, setPosition] = useState(0);  // حفظ موقع الرسوم المتحركة
    const ref = useRef(null);  // ref للوصول إلى DOM العنصر

    useEffect(() => {
        controls.start('animate');
    }, [controls]);


    const marqueeVariants = {
        animate: {
            x: [1500, -1500],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,  // تم تغيير المدة إلى 10 ثواني لتخفيف السرعة
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
