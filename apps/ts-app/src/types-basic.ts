export function add(a, b) {
  return a + b;
}

export function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

export function isAdult(age) {
  return age >= 18;
}

export function isEmpty(value) {
  return value === null || value === undefined || value === '';
}

export function getStatusMessage(isActive) {
  if (isActive) {
    return 'Active';
  }

  return 'Inactive';
}

const PI = 3.14159;

const exampleString = "Hello, TypeScript!";

const exampleNumber = 42;

const exampleBoolean = true;

const exampleArray = [1, 2, 3, 4, 5];