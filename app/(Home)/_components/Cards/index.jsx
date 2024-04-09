import './index.styles.scss'
import Button from '../Button/index'
import { CardsData } from '@/data/DataCardsHomePage'
import Star from '@/assets/Icons/Star'
const Cards = () => {


    return (
        <div className="cards__container">
            <div className='element-left'>
                {CardsData.map((card, index) => (
                    <div key={index} className='card-info'>
                        <card.icon />
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>

            <div className='element-right'>
                <p>Whether you're just starting out or a big player, we're here to make your brand stand out with awesome online experiences.</p>
                <Button text="START YOUR PROJECT" />
            </div>

            <div className='element-plus'>
                <div className='box'>
                    <p>SaaS Solutions Expert</p>
                </div>
                <Star />
                <p>As SaaS solution specialists, we collaborate with you to turn your vision into a thriving product, harnessing the power of cutting-edge technology for guaranteed success.</p>
            </div>
        </div>
    )
}

export default Cards