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
  if (typeof id === 'number') {
    return id.toString();
  }
  return id;
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
  if (contact.kind === 'email') {
    return `Email: ${contact.email}`;
  }
  return `Phone: ${contact.phone}`;
}

const pro = new Promise((reject, resolve) => {
  setTimeout(() => {
    resolve('Done');
  }, 1000);
});

pro.then((res1) => {
  return res1;
}).then((res2) => {
  return res2;
}).catch();

const res1 = await pro;
const res2 = await res1;

class Helpers {
  static normalizeId(id: Id): string {}
}

Helpers.normalizeId(5);