import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function writeContacts(data) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
}
