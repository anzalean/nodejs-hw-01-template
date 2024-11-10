import { readContacts } from '../utils/readContacts.js';

export async function countContacts() {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
}


console.log(await countContacts());
