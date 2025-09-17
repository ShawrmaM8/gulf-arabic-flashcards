import React, { useState } from 'react';

const Flashcard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-80 h-48 bg-white shadow-lg rounded-lg cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4 text-xl font-bold">
          {front}
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center p-4 text-xl font-arabic dir-rtl">
          {back}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

