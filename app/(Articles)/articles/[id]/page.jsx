import React from 'react';
import Image from 'next/image';
import './index.styles.scss';
import Suggestion from '../_components/Suggestion/index';
import { parseMarkdownFiles } from '@/utils/markdownParser';

// وظيفة جلب البيانات - افترض أنها تستمر على نفس الشكل كما هو موجود
export async function getData() {
  const data = await parseMarkdownFiles();
  return data;
}

// الصفحة الرئيسية للمقال
export default async function ArticlePage({ params }) {
  try {
    const data = await getData();
    const article = Array.isArray(data) ? data.find(article => article.id === params.id) : null;

    if (!article) {
      console.error('Article not found or data is invalid');
      return <div>No article found</div>;
    }

    // استبعاد المقال الحالي واختيار 3 مقالات عشوائية
    const suggestions = data.filter(item => item.id !== article.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
      console.log(suggestions)

    return (
      <div className="article-page">
        <div className="article-header-wrapper">
          <div className='article-header-container'>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-info">
              <div className="article-logo">TM</div>
              <div className="article-author">
                <p>{`Written by ${article.author}`}</p>
                <p className="article-date">{article.date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="article-content-wrapper">
          <div className="article-content-container">
            <Image src={`/${article.image}`} alt={article.title} className="article-image" width={1000} height={500} />
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>{article.descriptionTwo}</p>
            </div>
          </div>
        </div>
        <Suggestion data={suggestions} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading the article.</div>;
  }
}
