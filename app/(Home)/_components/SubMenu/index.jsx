import { useState } from 'react'; // Changed double quotes to single
import './index.styles.scss';     // Changed double quotes to single
import { IconsSubMenu } from '@/data/IconsSubMenu'; // Changed double quotes to single

const SubMenu = ({ isActive, sectionNumber ,dir='ltr' }) => {
    const renderItems = IconsSubMenu.map((item, index) => (
      <div dir={dir} className='SubMenu-icon-container' key={index}>
        <item.icon 
          className={`SubMenu-icon ${index === isActive ? 'active' : ''}`} 
          alt={item.title} 
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
        {sectionNumber !== undefined ? renderItems[sectionNumber] : renderItems}
      </div>
    );
  };
  
  export default SubMenu;
  