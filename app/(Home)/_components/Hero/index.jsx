import './index.style.scss'
import useAos from '@/hooks/useAos'
import Button from '../Button/index'
import Textfill from '@/hooks/text/TextFill';
import Image from 'next/image'
import MainImage from '@/assets/images/WorkPage/MainImage.svg'

const Hero = () => {
    const specialWords = ["WE", "LANGUAGE"];
    useAos()
    return (
        <div className='hero__container'>
            <div data-aos="fade-right" data-aos-duration="1000" className='hero_main'>
                <Textfill tagType='h1' specialWordsClass={"specialWords"} specialWords={specialWords}  wordsPerLineArray={[3, 3, 3]} >
                    WE SPEAK THE LANGUAGE OF INTERNET AND PEOPLE ALIKE.
                </Textfill>
                <Image src={MainImage} width={500} height={500} />
            </div>
        </div>
    )
}

export default Hero