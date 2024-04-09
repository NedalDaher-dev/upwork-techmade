import { useState } from "react";
import './index.styles.scss';
import { IconsSubMenu } from "@/data/IconsSubMenu";

const SubMenu = ({ isActive }) => {
    return (
        <div className='SubMenu-container'>
            {
                IconsSubMenu.map((item, index) => (
                    <div className='SubMenu-icon-container' key={index}>
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
                ))
            }
        </div>
    )
}

export default SubMenu;
