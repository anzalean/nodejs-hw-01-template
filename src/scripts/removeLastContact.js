import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export async function removeLastContact() {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
}


removeLastContact();
