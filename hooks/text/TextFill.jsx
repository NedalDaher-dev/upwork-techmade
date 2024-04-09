import React, { useState, useEffect, Children } from 'react';
import PropTypes from 'prop-types';

const TextSplitterComponent = ({ children, wordsPerLineArray, tagType: Tag = 'p', className, specialWordsClass, specialWords }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // التحقق من وجود الأبناء (النص)
    if (!children) {
      throw new Error('TextSplitterComponent requires text as children.');
    }

    const text = Children.toArray(children).reduce((acc, child) => 
      acc + (typeof child === 'string' ? child : ''), 
      ''
    ).replace(/\s+/g, ' ').trim();

    const words = text.split(' ');
    let currentLines = [];
    let lineIndex = 0;

    while (words.length > 0 && lineIndex < wordsPerLineArray.length) {
      let lineWordCount = wordsPerLineArray[lineIndex];
      let lineWords = words.splice(0, lineWordCount);
      let line = lineWords.map((word, index) => {
        let isSpecial = specialWords && specialWords.includes(word);
        return isSpecial ? <span key={index} className={specialWordsClass}>{word}</span> : word;
      });
      currentLines.push(<Tag key={lineIndex}>{line.reduce((acc, elem, idx) => 
        idx === 0 ? [elem] : [...acc, ' ', elem], 
        []
      )}</Tag>);
      lineIndex++;
    }

    setLines(currentLines);
  }, [children, wordsPerLineArray, specialWords, specialWordsClass]);

  return (
    <div className={className}>
      {lines}
    </div>
  );
};

TextSplitterComponent.propTypes = {
  children: PropTypes.node.isRequired,
  wordsPerLineArray: PropTypes.arrayOf(PropTypes.number).isRequired,
  tagType: PropTypes.string,
  className: PropTypes.string,
  specialWordsClass: PropTypes.string,
  specialWords: PropTypes.arrayOf(PropTypes.string)
};

export default TextSplitterComponent;
