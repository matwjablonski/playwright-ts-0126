// 5.1) Union typu prymitywnego
export type Id = number | string;

/**
 * Zwróć Id zawsze jako string.
 * - 1    -> "1"
 * - "1"  -> "1"
 */

const number = 5;
const stringFromNumber = String(number);
const stringFromNumber2 = number.toString();
const stringFromNumber3 = `${number}`;
const stringFromNumber4 = "" + number;

export function normalizeId(id: Id): string {
  // TODO
  return '';
}

// 5.2) Union obiektów (dwa warianty)
export type EmailContact = {
  kind: 'email';
  email: string;
};

export type PhoneContact = {
  kind: 'phone';
  phone: string;
};

export type Contact = EmailContact | PhoneContact;

/**
 * Zwróć opis kontaktu:
 * - email -> "Email: <email>"
 * - phone -> "Phone: <phone>"
 *
 * Użyj type guardu po polu `kind`.
 */
export function describeContact(contact: Contact): string {
  // TODO
  return '';
}