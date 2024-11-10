import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export async function generateContacts(count) {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: count }, () => createFakeContact());
    contacts.push(...newContacts);
    await writeContacts(contacts);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
}


generateContacts(5);
