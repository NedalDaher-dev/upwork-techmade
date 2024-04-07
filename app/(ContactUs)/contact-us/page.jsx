'use client';
import Hero from "./_components/Hero/Hero"
import ContactUs from "./_components/Contact box";
import './page.scss';
const Page = () => {

    return (
        <section className="contact-us-wrapper">
            <div className="contact-us-container">
                <div className="Footnotes "> 
                    <Hero />
                </div>
                <ContactUs />
            </div>
        </section>
    )
}

export default Page