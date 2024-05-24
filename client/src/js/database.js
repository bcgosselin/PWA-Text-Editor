import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Function to add content to the database
export const putDb = async (content) => {
  // Open the 'jate' database with version 1
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('Content added to the database');
};

// Function to content from object stored in DB
export const getDb = async () => {
  // Open the 'jate' database with version 1
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // Get the content from the object store with id 1
  const content = store.get(1);
  const result = await content;
  // Return the value of the retrieved content, if available
  return result?.value;
};

initdb(); // Initialize the database when the module is loaded
