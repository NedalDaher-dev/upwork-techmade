import './index.style.scss'
import useAos from '@/hooks/useAos'
// import Button from '../Button/index'
// import Textfill from '@/hooks/text/TextFill';
// import Image from 'next/image'
// import MainImage from '@/assets/images/WorkPage/MainImage.svg'
import SubMenu from '../SubMenu'

const Hero = () => {
    const specialWords = ["WE", "LANGUAGE"];
    useAos()
    return (
        <div className='hero__container'>
            <div data-aos="fade-right" data-aos-duration="1000" className='hero_main'>
                <h1>
                    We speak the language of internet and people alike.

                </h1>
            </div>
        </div>
    )
}

export default Hero