import useAos from '@/hooks/useAos'
import SubMenu from '../SubMenu'
import TextSplitterComponent from '@/hooks/text/TextFill'
import { useTheme } from '@/contexts/ThemeContext';
import Button from '../Button/index';

import './index.styles.scss'
const Excellence = () => {
    const { theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme } = useTheme();
    const isPhoneScreen = screenWidth <= 767;
    const isTabletScreen = screenWidth > 767 && screenWidth <= tabletScreenWidth;
    useAos()
    return (
        <div className='excellence__container'>
            {
                isTabletScreen ? (
                    <>
                        <div data-aos="fade-right" data-aos-duration="200" className='element-right'>
                            <TextSplitterComponent tagType='p' wordsPerLineArray={[8, 7, 6, 5, 4, 6, 5]}  >
                                We work with you at every stage of the step to bring your idea into reality. Starting off with an initial consultation call to understand your requirements and identify minimum viable product to get your product out in the market quickly.
                            </TextSplitterComponent>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="200" className='element-left'>
                            <TextSplitterComponent tagType='p' wordsPerLineArray={[7, 5, 4, 4, 3, 6, 5]}  >
                                We offer a full spectrum of web services tailored to elevate your brand. From innovative web design and development to strategic digital marketing solutions, we bring your vision to life in the digital realm.
                            </TextSplitterComponent>
                            <Button className='' text="START YOUR PROJECT" />

                        </div>
                    </>
                ) : isPhoneScreen ? (
                    <>
                        <div data-aos="fade-right" data-aos-duration="200" className='element-left'>
                            <p>
                                We offer a full spectrum of web services tailored to elevate your brand. From innovative web design and development to strategic digital marketing solutions, we bring your vision to life in the digital realm.
                            </p>
                            <Button className='' text="About Us" />
                        </div>
                    </>
                ) : (
                    <>
                        <div data-aos="fade-right" data-aos-duration="200" className='element-right'>
                            <SubMenu isActive={1} />
                        </div>

                        <div data-aos="fade-left" data-aos-duration="200" className='element-left'>
                            <h1>WE EXCEL IN BOTH ONLINE AND <span>HUMAN</span> LANDSCAPES</h1>
                            {/* <TextSplitterComponent tagType='h1' specialWords={["HUMAN"]} specialWordsClass={"specialWords"} wordsPerLineArray={[4, 3, 1]}  >
                                WE EXCEL IN BOTH ONLINE AND HUMAN LANDSCAPES
                            </TextSplitterComponent> */}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Excellence