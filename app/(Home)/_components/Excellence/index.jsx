import useAos from '@/hooks/useAos'
import SubMenu from '../SubMenu'
import './index.styles.scss'
const Excellence = () => {
    useAos()
    return (
        <div className='excellence__container'>
            <div data-aos="fade-right" data-aos-duration="200" className='element-right'>
                <SubMenu isActive={1} />
            </div>

            <div data-aos="fade-left" data-aos-duration="200" className='element-left'>
                <h1>WE EXCEL IN BOTH  ONLINE AND <span>HUMAN</span> LANDSCAPES</h1>
            </div>
        </div>
    )
}

export default Excellence