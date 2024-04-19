'use client';
import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import './index.styles.scss';
import ArrowYellow from '@/assets/Icons/ArrowYellow'; // تأكد من صحة المسار
import Link from 'next/link'; // استيراد المكون Link

const Posts = ({ data }) => {
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const count = Math.ceil(data.length / itemsPerPage);  // حساب عدد الصفحات بناءً على العدد الثابت للعناصر لكل صفحة

    useEffect(() => {
        // وظيفة لتحديد عدد العناصر لكل صفحة بناءً على عرض الشاشة
        const handleResize = () => {
            if (window.innerWidth < 768) { // افتراض أن عرض 768px هو عرض الهاتف
                setItemsPerPage(2); // للهواتف، عرض عنصرين لكل صفحة
            } else {
                setItemsPerPage(5); // للتابلت والأجهزة ذات العرض الأكبر، خمسة عناصر لكل صفحة
            }
        };

        handleResize(); // تنفيذ الوظيفة مباشرة عند تحميل المكون

        window.addEventListener('resize', handleResize); // إضافة المستمع لتغييرات حجم النافذة

        return () => {
            window.removeEventListener('resize', handleResize); // إزالة المستمع عند التفكيك لتجنب تسريبات الذاكرة
        };
    }, []);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    };

    return (
        <div className="posts-wrapper">
            <div className='posts-container'>
                {currentData().map((item, index) => (
                    <Link className={`${index < 6 ? `post-link-${index + 1}` : 'post-link'}  ` } key={index} href={`/articles/${item.id}`} passHref>
                        <div className='post-link'>
                            <Image className='image-article' src={`/${item.image}`} width={index === 4 ? 689 : index === 5 ? 600 : 377}  height={index === 4 ? 485 : index === 5 ? 400 : 502} alt={item.title} />
                            <div className='title-article'>
                                <h2>{item.title}</h2>
                                <ArrowYellow className='arrow-icon' />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Stack className='posts-pagination'  spacing={2}>
                <Pagination variant="outlined" count={count} page={currentPage} onChange={handleChange} showFirstButton showLastButton />
            </Stack>
        </div>
    );
};

export default Posts;
