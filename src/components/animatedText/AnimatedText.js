import React, { useState } from 'react';
import './AnimatedText.scss'
export default function AnimatedText(props) {

  const textChunk = props.text.split(" ");
  const [activeAnimation, setActiveAnimation] = useState(textChunk.map(t => true));

  function _handleAnimationEnd(e, i) {
    console.log(e, i)
    let updatedAnimations = activeAnimation;
    updatedAnimations[i] = false; // !updatedAnimations[i];
    setActiveAnimation(updatedAnimations);
    
    if (activeAnimation.filter(b => (b)).length === 0) {
      updatedAnimations = activeAnimation;
      updatedAnimations.map(b => (true));
      setActiveAnimation(updatedAnimations); 
    }
  }

  return (
    <div className={`animatedTextBox`}>
      <div className="textContainer">
        { textChunk.map((word, index) => {
          let randSize = Math.round(Math.random() * 25) * 2;
          const activeClass = (activeAnimation[index]) ? "animated" : "";
          return <div 
                  key={index}
                  className={`textNode ${activeClass}`} 
                  onAnimationEnd={(e) => _handleAnimationEnd(e, index)}
                  style={{
                      fontSize: `calc(${randSize}px + 2vmin)`, 
                      animationDelay: `${1 * index}s`,
                      animationDuration: `${Math.round(Math.random() * 200)/100 + 1}s`
                    }}
                    >{word}</div>
        })}
      </div>
    </div>
  );
}
