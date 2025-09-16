import React, { useState } from "react";

function InputText({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type Gulf Arabic text here"
      />
      <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
        Extract Words & Create Flashcards
      </button>
    </form>
  );
}

export default InputText;
