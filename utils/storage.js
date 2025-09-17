// IndexedDB wrapper using idb
import { openDB } from "idb";

const DB_NAME = "flashcardsDB";
const STORE_NAME = "flashcards";

async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    },
  });
}

export async function saveFlashcard(card) {
  const db = await getDB();
  await db.put(STORE_NAME, card);
}

export async function loadFlashcards() {
  const db = await getDB();
  return await db.getAll(STORE_NAME);
}
