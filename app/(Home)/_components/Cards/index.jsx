import { CardsData } from '@/data/DataCardsHomePage'
import './index.styles.scss'
import Star from '@/assets/Icons/Star'
import Button from '../Button/index'
import TextSplitterComponent from '@/hooks/text/TextFill'
import useAos from '@/hooks/useAos'

const Cards = () => {
    useAos()
        return(
            <div className="cards__container">
            <div className='element-left'>
                {CardsData.map((card, index) => (
                    <div data-aos="fade-up" key={index} className='card-info'>
                        <card.icon />
                        <TextSplitterComponent tagType='h1' wordsPerLineArray={card.splitTitle} >
                            {card.title}
                        </TextSplitterComponent>
                        <TextSplitterComponent tagType='p' wordsPerLineArray={card.splitText} >
                            {card.description}
                        </TextSplitterComponent>
    
                    </div>
                ))}
            </div>
            <div data-aos="fade-up" className='element-right'>
                <TextSplitterComponent tagType='p' wordsPerLineArray={[7, 7, 5, 2]} >
                    Whether you&apos;re just starting out or a big player, we&apos;re here to make your brand stand out with awesome online experiences.
                </TextSplitterComponent>
                <Button text="START YOUR PROJECT" />
            </div>
            <div className='element-plus'>
                <div className='box'>
                    <p>SaaS Solutions Expert</p>
                </div>
                <Star />
                <TextSplitterComponent tagType='p' wordsPerLineArray={[3, 2, 4, 5, 2, 4, 2, 3]} >
                    As SaaS solution specialists, we collaborate with you to turn your vision into a thriving product, harnessing the power of cutting-edge technology for guaranteed success.            </TextSplitterComponent>
            </div>
        </div>
        )
}
  

export default Cards;
