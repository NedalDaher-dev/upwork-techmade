"use client"
import '../Posts/index.styles.scss'
import './index.styles.scss'
import Link from 'next/link'; // استيراد المكون Link
import ArrowYellow from '@/assets/Icons/ArrowYellow'; // تأكد من صحة المسار
import Image from 'next/image';
import Textfill from '@/hooks/text/TextFill';

const Suggestion = ({ data }) => {

    return (
        <div className='suggestion-wrapper'>
            <Textfill tagType='h1' wordsPerLineArray={[2, 3]} >
            More post you might like
            </Textfill>
            <div className='posts-container'>
                {data.map((item, index) => (
                    <Link className='post-card' key={index} href={`/articles/${item.id}`} passHref>
                        <div className='post-link'>
                            <Image className='image-article' src={`/${item.image}`} width={377} height={502} alt={item.title} />
                            <div className='title-article'>
                                <h2>{item.title}</h2>
                                <ArrowYellow />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Suggestion;