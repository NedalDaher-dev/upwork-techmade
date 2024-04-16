import { useState, useEffect } from 'react';
import './index.styles.scss';
import { IconsSubMenu } from '@/data/IconsSubMenu';

const SubMenu = ({ isActive, dir = 'ltr', sectionNumber }) => {
    const [active, setActive] = useState(isActive);

    useEffect(() => {
        setActive(isActive);
    }, [isActive]);

    const handleMouseEnter = (index) => {
        if (!isTablet) {
            setActive(index);
            console.log('handleMouseEnter');
        }
    };

    const handleMouseLeave = () => {
        console.log('handleMouseLeave');
    };

    const renderItems = IconsSubMenu.map((item, index) => {
        // الآن يتم التحقق لمعرفة إذا كان الفهرس يطابق sectionNumber وكذلك الشروط السابقة
        const shouldShowIcon = (index === sectionNumber) && ( index === active);
        return shouldShowIcon ? (
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
        ) : null;
    });

    return (
        <div className='SubMenu-container'>
            {renderItems}
        </div>
    );
};

export default SubMenu;
