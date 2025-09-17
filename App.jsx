import React, { useState, useEffect } from 'react';
import { flashcards } from './data/flashcards';
import Flashcard from './components/Flashcard';
import _ from 'lodash';

function App() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCards(_.shuffle(flashcards)); // Shuffle on load
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  if (cards.length === 0) return <div className="text-center mt-10">Loading cards...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Gulf Arabic Flashcards</h1>
      <Flashcard front={cards[currentIndex].front} back={cards[currentIndex].back} />
      <div className="mt-4 flex space-x-4">
        <button onClick={prevCard} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Previous</button>
        <button onClick={nextCard} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
      </div>
    </div>
  );
}

export default App;