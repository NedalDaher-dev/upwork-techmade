import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './index.styles.scss';
import '@/styles/index.scss';
import Button from '../Button/index';

const StartProj = () => (
  <div className="startProj__container">
    <Parallax className="startProj__left" scale={[0.3, 1]}>
      <p>We offer a full spectrum of web services tailored to elevate your brand. From innovative web design and development to strategic digital marketing solutions, we bring your vision to life in the digital realm.</p>
      <Button className='button_style_light' text="START YOUR PROJECT" />
    </Parallax>
    <div className="startProj__right">
      <p>We offer a full spectrum of web services tailored to elevate your brand. From innovative web design and development to strategic digital marketing solutions, we bring your vision to life in the digital realm.</p>
      <Button text='START YOUR PROJECT' />
    </div>
  </div>
);

export default StartProj;
