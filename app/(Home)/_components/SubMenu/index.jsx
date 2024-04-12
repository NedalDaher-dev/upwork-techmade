import { useState, useEffect } from 'react';
import './index.styles.scss';
import { IconsSubMenu } from '@/data/IconsSubMenu';

const SubMenu = ({ isActive, dir='ltr' }) => {
    const [active, setActive] = useState(isActive);

    useEffect(() => {
        setActive(isActive);
    }, [isActive]);

    const handleMouseEnter = (index) => {
        setActive(index); // تحديث الحالة النشطة إلى مؤشر الأيقونة
        console.log('handleMouseEnter');
    };

    // قمنا بإزالة تعيين الحالة إلى isActive في هذا المعالج للسماح بالبقاء على العنصر الجديد نشطًا
    const handleMouseLeave = () => {
        console.log('handleMouseLeave');
        // لا تقم بتغيير الحالة عند مغادرة الماوس
    };

    const renderItems = IconsSubMenu.map((item, index) => (
        <div 
            dir={dir} 
            className='SubMenu-icon-container' 
            key={index} 


        >
            <item.icon 
                className={`SubMenu-icon ${index === active ? 'active' : ''}`} 
                alt={item.title}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            />
            <div className='SubMenu-text'>
                <p className='Main-text'>{item.title}</p>
                <div className="underline" />
                <p className='Sub-text'>{item.description}</p>
            </div>
        </div>
    ));

    return (
        <div className='SubMenu-container'>
            {renderItems}
        </div>
    );
};

export default SubMenu;
