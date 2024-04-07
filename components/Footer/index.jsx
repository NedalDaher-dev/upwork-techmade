import '@/styles/index.scss'
import './index.styles.scss'
import Logo from '@/assets/Icons/Logo'; // تأكد من أن المسار صحيح
import Link from 'next/link'
import { navLinks } from '@/data/NavlinksData';
import { footerLinksIcon } from '@/data/IconFooter';
import Instagram from "@/assets/Icons/Social Media/Instagram";

const footer = () => {

    return (
        <div>
            <section className="footer-wrapper">
                <div className='footer-container'>
                    <h2>
                        Embark on an exhilarating journey beyond your limits with us!
                    </h2>
                    <div className='buttonWrapper'>
                            <button className='button'>Schedule a call</button>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="footer-bottom-container">
                    <div className="footer-nav">
                        <Logo />
                        <div className='footer-nav-item'>
                            {navLinks.map((item) => (
                                <Link className='' href={item.url} key={item.title}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className="social-icons">
                            {Object.entries(footerLinksIcon).map(([key, Icon]) => (
                                <div key={key}>
                                    <Icon className={"social-icon"} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <p className="copyright">
                        © 2024 Techmade. All rights reserved.
                    </p> */}
                </div>
            </section>
        </div>
    )
}

export default footer