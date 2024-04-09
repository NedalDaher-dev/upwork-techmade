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
                <p>We offer a full spectrum of web services tailored to elevate your brand. From innovative web design and development to strategic digital marketing solutions, we bring your vision to life in the digital realm.</p>
                <Button text="START YOUR PROJECT" />
            </div>
        </div>
    )
}

export default Excellence