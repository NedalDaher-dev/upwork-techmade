import './index.styles.scss'
import Button from '@/components/Buttoun/index'
const Hero = () => {

    return (
        <div className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-text">
                    <p>REACH OUT</p>
                    <h1>Driven to achieve, committed to enjoy.</h1>
                </div>
                <div className='button-Wrapper'>
                    <Button description={'techmadeagency@techmade.com'}>EMAIL US</Button>
                    <Button description={'Book a call with our experts.'}>START YOUR PROJECT</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero