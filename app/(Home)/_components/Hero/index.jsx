import './index.style.scss'
import useAos from '@/hooks/useAos'
import Button from '../Button/index'
const Hero = () => {
    useAos()
    return (
        <div className='hero__container'>
            <div data-aos="fade-right" data-aos-duration="1000" className='hero_main'>
                <h1>WE SPEAK THE LANGUAGE OF INTERNET AND PEOPLE ALIK .</h1>
            </div>
        </div>
    )
}

export default Hero