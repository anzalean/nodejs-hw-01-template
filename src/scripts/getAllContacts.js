import { readContacts } from '../utils/readContacts.js';

export async function getAllContacts() {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
  }
}


console.log(await getAllContacts());
