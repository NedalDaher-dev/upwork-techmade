import useAos from '@/hooks/useAos'
import SubMenu from '../SubMenu'
import TextSplitterComponent from '@/hooks/text/TextFill'
import './index.styles.scss'
const Excellence = () => {
    useAos()
    return (
        <div className='excellence__container'>
            <div data-aos="fade-right" data-aos-duration="200" className='element-right'>
                <SubMenu isActive={1} />
            </div>

            <div data-aos="fade-left" data-aos-duration="200" className='element-left'>
                <TextSplitterComponent tagType='h1' specialWords={["HUMAN"]} specialWordsClass={"specialWords"} wordsPerLineArray={[4, 3, 1]}  >
                    WE EXCEL IN BOTH ONLINE AND HUMAN LANDSCAPES
                </TextSplitterComponent>
            </div>
        </div>
    )
}

export default Excellence