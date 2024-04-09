import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Design from '@/assets/Icons/Design';
import CodeSmall from '@/assets/Icons/Code-small';
import { featuresRight, numbers } from './_constants';
import './index.styles.scss';

const Achievements = () => {
  const { theme, phoneScreenWidth, screenWidth, toggleTheme } = useTheme();

  return (
    <div id='Services' className="about-us-achievements-wrapper">
      <div className="container">
        <div className="container-left">
          <h1>Bespoke solutions, from UI/UX finesse to mobile brilliance.</h1>
          <div className="stats-container">
            {numbers.map((item, idx) => (
              <div key={idx}>
                <h2 className="stats-number">{item.number}+</h2>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-right">
          {
            phoneScreenWidth >= screenWidth ? (
              <>
                <div className='info-container'>
                  <h1>Digital Solutions</h1>
                  <div>
                    <h2>Web development</h2>
                    <h2>App development</h2>
                  </div>
                </div>
                <div className='We-develop-container'>
                  <CodeSmall />
                  <div>
                    <h2>We Develop</h2>
                    <div className="underline" />
                    <p>Turning Ideas into Impact.</p>
                  </div>
                </div>
                <div dir='rtl' className='info-container-ui-ux'>
                  <h1>UI/UX</h1>
                  <div>
                    <h2>Best Practices and Trends</h2>
                    <h2>Strategies in UI/UX Excellence</h2>
                    <h2>The Psychology of User-Centric Design</h2>
                  </div>
                </div>
                <div dir='rtl' className='We-desing-container'>
                  <Design />
                  <div>
                    <h2>We Design</h2>
                    <div className="underline" />
                    <p>We offer a full spectrum of web services tailored to elevate your brand</p>
                  </div>
                </div>
              </>
            ) : (
              featuresRight.map((item, idx) => (
                <div className="info-container" key={idx}>
                  <h2>{item.title}</h2>
                  <div>
                    {item.list.map((subItem, subIdx) => (
                      <p key={subIdx}>{subItem.title}</p>
                    ))}
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  );
};
export default Achievements;
