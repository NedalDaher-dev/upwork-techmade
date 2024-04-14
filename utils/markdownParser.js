// utils/markdownParser.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function parseMarkdownFiles() {
  // تحديد مسار المجلد داخل الدالة
  const directoryPath = path.join(process.cwd(), './data/posts');

  // حصل على جميع ملفات داخل المجلد
  const filenames = fs.readdirSync(directoryPath);

  // فلترة للحصول فقط على ملفات Markdown
  const mdFiles = filenames.filter(file => file.endsWith('.md'));

  // تحليل كل ملف وإنشاء كائن لكل منها
  const posts = mdFiles.map(filename => {
    const filePath = path.join(directoryPath, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      filename,
      ...data
    };
  });

  return posts;
}
