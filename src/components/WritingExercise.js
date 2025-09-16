// src/components/WritingExercise.js
import React, { useState } from "react";
import { updateCardInterval } from "../utils/srs";

export default function WritingExercise({ card, onUpdate }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);

  if (!card) return <p className="italic text-gray-500">No cards due right now!</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = answer.trim() === card.arabic;
    setFeedback(correct ? "✅ Correct!" : `❌ Wrong. Correct answer: ${card.arabic}`);

    // Update spaced repetition status
    const updated = updateCardInterval(card, correct);
    onUpdate(updated);

    setAnswer("");
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md my-4">
      <h2 className="text-lg font-bold mb-2">Translate into Arabic:</h2>
      <p className="mb-2">English: <span className="font-semibold">{card.english}</span></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border rounded px-2 py-1 w-full mb-2"
          placeholder="Type in Arabic..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {feedback && <p className="mt-2">{feedback}</p>}
    </div>
  );
}
