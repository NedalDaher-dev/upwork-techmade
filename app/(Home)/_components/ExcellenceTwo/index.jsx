import useAos from '@/hooks/useAos'
import SubMenu from '../SubMenu'
import './index.styles.scss'
import Button from '../Button/index'
import TextSplitterComponent from '@/hooks/text/TextFill'
const Excellence = () => {
    useAos()
    return (
        <div className='excellenceTwo__container'>
            <div data-aos="fade-right" data-aos-duration="100" className='element-right'>
                <SubMenu isActive={2} />
            </div>

            <div data-aos="fade-left" data-aos-duration="100" className='element-left'>
                <TextSplitterComponent tagType='h1' specialWords={["MARKET"]} specialWordsClass={"specialWords"} wordsPerLineArray={[3, 2, 4]} >
                IDEA TO REALITY COLLABORATIVE STAGES FOR SWIFT MARKET ENTRY
                </TextSplitterComponent>
            </div>
            <div className="element-plus-two">
                <p>We work with you at every stage of the step to bring your idea into reality. Starting off with an initial consultation call to understand your requirements and identify minimum viable product to get your product out in the market quickly.</p>
                <Button text="START YOUR PROJECT" />
            </div>
        </div>
    )
}

export default Excellence