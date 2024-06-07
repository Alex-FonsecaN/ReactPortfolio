import React, { useState, useEffect } from 'react';

function TypingEffect({ text }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 30);

            return () => clearTimeout(timer);
        }
    }, [index, text]);

    useEffect(() => {
        setDisplayedText('');
        setIndex(0);
    }, [text]);

    return <span>{displayedText}</span>;
}

export default TypingEffect;
