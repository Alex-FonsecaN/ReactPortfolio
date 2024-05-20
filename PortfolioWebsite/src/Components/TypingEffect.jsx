import React, { useState, useEffect } from 'react';

function TypingEffect({ text }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        setDisplayedText(text[index]);
        const timer = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            console.log(text[index]);
            if (index === text.length -1) {
                clearInterval(timer);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [text]);

    return <span>{displayedText}</span>;
}

export default TypingEffect;
