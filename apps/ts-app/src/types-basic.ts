export function add(a: number, b: number): number {
  return a + b;
}

export function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

export function isAdult(age: number): boolean {
  return age >= 18;
}

export function isEmpty(value: unknown): boolean {
  return value === null || value === undefined || value === '';
}

export function getStatusMessage(isActive: boolean): "Active" | "Inactive" {
  if (isActive) {
    return 'Active';
  }

  return 'Inactive';
}

const PI: number = 3.14159;

const exampleString: string = "Hello, TypeScript!";

const exampleNumber: number = 42;

const exampleBoolean: boolean = true; 

const exampleArray: number[] = [1, 2, 3, 4, 5];
