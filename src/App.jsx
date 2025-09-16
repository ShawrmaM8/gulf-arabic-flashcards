import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import WritingExercise from "./components/WritingExercise";
import { getDueCards } from "./utils/srs";

export default function App() {
  const [cards, setCards] = useState([
    { id: 1, arabic: "سلام", english: "Peace", interval: 1 },
    { id: 2, arabic: "ماء", english: "Water", interval: 1 },
    { id: 3, arabic: "كتاب", english: "Book", interval: 1 },
  ]);

  const dueCards = getDueCards(cards);
  const currentCard = dueCards[0] || null;

  const handleUpdate = (updatedCard) => {
    setCards((prev) =>
      prev.map((c) => (c.id === updatedCard.id ? updatedCard : c))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📘 Gulf Arabic Flashcards</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div>
          <h2 className="text-xl font-semibold mb-2">Flashcard Review</h2>
          {dueCards.length > 0 ? (
            dueCards.map((card) => (
              <Flashcard
                key={card.id}
                arabic={card.arabic}
                english={card.english}
              />
            ))
          ) : (
            <p className="text-gray-500 italic">🎉 All cards reviewed!</p>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Writing Exercise</h2>
          <WritingExercise card={currentCard} onUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
}
