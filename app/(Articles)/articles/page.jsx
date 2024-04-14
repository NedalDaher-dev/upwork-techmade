import React from 'react';
import './index.styles.scss';
import { parseMarkdownFiles } from '@/utils/markdownParser';
import Hero from './_components/Hero';
import Articles from './_components/Posts';
async function getData() {
  const data = await parseMarkdownFiles();
  return data;
}

export default async function Page  ()  {
    const posts = await parseMarkdownFiles();

    return(
      <div className='articles-wrapper'>
        <Hero/>
        <Articles data={posts} itemsPerPage={3} />

      </div>
    )
}

