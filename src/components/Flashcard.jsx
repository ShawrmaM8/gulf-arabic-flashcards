// src/components/Flashcard.jsx
import React, { useState } from "react";

export default function Flashcard({ arabic, english }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-40 bg-white rounded-xl shadow-md flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
      onClick={() => setFlipped(!flipped)}
    >
      <p className="text-2xl font-bold">
        {flipped ? english : arabic}
      </p>
    </div>
  );
}


