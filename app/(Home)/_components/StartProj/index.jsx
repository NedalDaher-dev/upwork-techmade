import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './index.styles.scss';
import '@/styles/index.scss';
import Button from '../Button/index';
import TextSplitterComponent from '@/hooks/text/TextFill';
import { useTheme } from '@/contexts/ThemeContext';
import SubMenu from '../SubMenu';
import useAos from '@/hooks/useAos';
import Star from '@/assets/Icons/Star';
const StartProj = () => {
  const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();

  const isPhoneScreen = screenWidth <= 767;
  const isTabletScreen = screenWidth > 767 && screenWidth <= tabletScreenWidth;
  useAos()

  return (
    <>
      {
        isPhoneScreen ? (
          <div className='startProj__container'>
        
        <div className="startProj__box__phone">
            <div className='startProj__main__text'>
              <h1>Stand Out Online Elevate Your Brand with Us</h1>
            </div>
            <div className='startProj__button'>
                  <Button className={`button_style_${theme}`} text="START YOUR PROJECT" />
                  <p>TM</p>
                </div>
            <div className="startProj__text">
              <Star className='star'/>
              <h3>SaaS Solutions Expert</h3>
              <TextSplitterComponent tagType='p' wordsPerLineArray={[5, 5, 5, 4, 4, 2]} >
                As SaaS solution specialists, we collaborate with you to turn your vision into a thriving product, harnessing the power of cutting-edge technology for guaranteed success.
              </TextSplitterComponent>
            </div>
          </div>
          <div className='startProj__subMenu'>
                <SubMenu sectionNumber={0} isActive={0} />
                <SubMenu dir='rtl' sectionNumber={1} isActive={1} />
                <SubMenu sectionNumber={2} isActive={2} />
            </div>
          </div>
        ) : isTabletScreen ? (
          <>
            <div className="startProj__container">
              <div className="startProj__box__tablet">
                <h1>
                  Stand Out Online Elevate Your Brand with Us
                </h1>
                <div className='startProj__button'>
                  <Button className={`button_style_${theme}`} text="START YOUR PROJECT" />
                  <p>TM</p>
                </div>
              </div>
              <div className='startProj__subMenu'>
                <SubMenu sectionNumber={0} isActive={0} />
                <SubMenu dir='rtl' sectionNumber={1} isActive={1} />
                <SubMenu sectionNumber={2} isActive={2} />
              </div>
              <div className="startProj__text">
                <Star className='star' />
                <h1>SaaS Solutions Expert</h1>
                <TextSplitterComponent tagType='p' wordsPerLineArray={[5, 5, 5, 4, 4, 2]} >
                  As SaaS solution specialists, we collaborate with you to turn your vision into a thriving product, harnessing the power of cutting-edge technology for guaranteed success.
                </TextSplitterComponent>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="startProj__container">
              <Parallax className="startProj__left" scale={[1, 1.3]}>
                <TextSplitterComponent tagType='h1' wordsPerLineArray={[3, 3, 2]} >
                  STAND OUT ONLINE ELEVATE YOUR BRAND WITH US
                </TextSplitterComponent>
                <Button className='button_style_light' text="START YOUR PROJECT" />
              </Parallax>
              <div data-aos="fade-up" className="startProj__right">
                <TextSplitterComponent tagType='p' wordsPerLineArray={[7, 5, 5, 5, 5, 8]} >
                  We offer a full spectrum of web services tailored to elevate your brand. From innovative web design and development to strategic digital marketing solutions, we bring your vision to life in the digital realm.
                </TextSplitterComponent>
                <Button text='START YOUR PROJECT' />
              </div>
            </div>
          </>
        )
      }
    </>
  )
};

export default StartProj;
