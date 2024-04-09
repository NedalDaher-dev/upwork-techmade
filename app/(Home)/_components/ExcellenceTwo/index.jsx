import useAos from '@/hooks/useAos'
import SubMenu from '../SubMenu'
import './index.styles.scss'
import Button from '../Button/index'
const Excellence = () => {
    useAos()
    return (
        <div className='excellenceTwo__container'>
            <div data-aos="fade-right" data-aos-duration="100" className='element-right'>
                <SubMenu isActive={2} />
            </div>

            <div data-aos="fade-left" data-aos-duration="100" className='element-left'>
                <h1>IDEA TO REALITY COLLABORATIVE STAGES FOR SWIFT <span>MARKET</span> ENTRY</h1>
            </div>
            <div className="element-plus-two">
                <p>We offer a full spectrum of web services tailored to elevate your brand. From innovative web design and development to strategic digital marketing solutions, we bring your vision to life in the digital realm.</p>
                <Button text="START YOUR PROJECT" />
            </div>
        </div>
    )
}

export default Excellence