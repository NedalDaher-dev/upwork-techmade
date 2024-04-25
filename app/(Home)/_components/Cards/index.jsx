
import { CardsData } from '@/data/DataCardsHomePage'
import './index.styles.scss'
import Star from '@/assets/Icons/Star'
import Button from '@/components/Button/index';
import TextSplitterComponent from '@/hooks/text/TextFill'
import useAos from '@/hooks/useAos'
import BackgroundBox from '@/assets/images/WorkPage/BackgroundBox'

const Cards = () => {
    
    useAos()
    return (
        <div className="cards__container">
            <div className='element-left'>
                {CardsData.map((card, index) => (
                    <div data-aos="fade-up" key={index} className='card-info'>
                        <card.icon />
                        <h1> {card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <div data-aos="fade-up" className='element-right'>
                <TextSplitterComponent tagType='p' wordsPerLineArray={[7, 7, 5, 2]} >
                    Whether you&apos;re just starting out or a big player, we&apos;re here to make your brand stand out with awesome online experiences.
                </TextSplitterComponent>
                <Button text="START YOUR PROJECT" />
            </div>
            <div  data-aos="fade-up" className='element-plus'>
                <div className='box-container'>
                    <div className='box'>
                        <p>SaaS Solutions Expert</p>
                    </div>
                    <Star />
                    <p>
                    As SaaS solution specialists, we collaborate with you to turn your vision into a thriving product, harnessing the power of cutting-edge technology for guaranteed success.

                    </p>
                </div>
            </div>
        </div>
    )
}


export default Cards;
