'use client';
import dynamic from 'next/dynamic';
import Hero from './_components/Hero/Hero';
const ContactUs = dynamic(() => import('./_components/Contact box'), { ssr: false });
import './page.scss';

const Page = () => (
    <section className="contact-us-wrapper">
        <div className="contact-us-container">
            <div className="Footnotes">
                <Hero />
            </div>
            <ContactUs />
        </div>
    </section>
);

export default Page;
