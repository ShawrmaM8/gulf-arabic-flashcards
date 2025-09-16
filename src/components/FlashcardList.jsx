import React from "react";
import Flashcard from "./Flashcard";

function FlashcardList({ flashcards, onCardUpdate }) {
  return (
    <div>
      {flashcards.map((card) => (
        <Flashcard key={card.id} card={card} onUpdate={onCardUpdate} />
      ))}
    </div>
  );
}

export default FlashcardList;
