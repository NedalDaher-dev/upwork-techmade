'use client';
import './index.styles.scss';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // استيراد المكون Link
import ArrowYellow from '@/assets/Icons/ArrowYellow'; // تأكد من صحة المسار
import Image from 'next/image';
import Textfill from '@/hooks/text/TextFill';

const Suggestion = ({ data }) => {
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const resizeHandler = () => {
            const screenWidth = window.innerWidth;
            let newData;

            if (screenWidth < 768) { // افتراض أن عرض 768px هو للهاتف
                newData = data.slice(0, 1); // للهواتف، عرض عنصر واحد
            } else if (screenWidth >= 768 && screenWidth <= 1024) { // افتراض أن عرض 768px إلى 1024px هو للتابلت
                newData = data.slice(0, 2); // للتابلت، عرض عنصرين
            } else {
                newData = data; // للديسكتوب وأكبر، لا يحذف أي عنصر
            }
            setFilteredData(newData);
        };

        resizeHandler();
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [data]);

    return (
        <div className='suggestion-wrapper'>
            <div className='suggestion-header'>
                <p className='suggestion-text'>
                    More posts you might like
                </p>
                <div className='suggestion-text-sub'>
                    <p>View all</p>
                    <ArrowYellow/>
                </div>
            </div>
            <div className='posts-container'>
                {filteredData.map((item, index) => (
                    <Link className='post-card' key={index} href={`/articles/${item.id}`} passHref>
                        <div className='post-link'>
                            <Image className='image-article' src={`/${item.image}`} width={377} height={502} alt={item.title} />
                            <div className='title-article'>
                                <h2>{item.title}</h2>
                                <ArrowYellow />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Suggestion;
