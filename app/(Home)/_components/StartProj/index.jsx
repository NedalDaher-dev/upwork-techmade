import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './index.styles.scss';
import '@/styles/index.scss';
import Button from '../Button/index';
import TextSplitterComponent from '@/hooks/text/TextFill';

const StartProj = () => (
  <div className="startProj__container">
    <Parallax className="startProj__left" scale={[0.7, 1]}>
      <TextSplitterComponent tagType='h1' specialWords={["HUMAN"]} specialWordsClass={"specialWords"} wordsPerLineArray={[3, 3, 2]} >
        Stand Out Online Elevate Your Brand with Us
      </TextSplitterComponent>
      <Button className='button_style_light' text="START YOUR PROJECT" />
    </Parallax>
    <div className="startProj__right">
      <TextSplitterComponent tagType='p' specialWords={["HUMAN"]} specialWordsClass={"specialWords"} wordsPerLineArray={[7, 5, 5, 5, 5, 8]} >
        We offer a full spectrum of web services tailored to elevate your brand. From innovative web design and development to strategic digital marketing solutions, we bring your vision to life in the digital realm.
      </TextSplitterComponent>
      <Button text='START YOUR PROJECT' />
    </div>
  </div>
);

export default StartProj;
