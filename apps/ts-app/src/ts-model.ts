// 1) Zamodeluj typ Todo
// Wymagane pola:
// - id: number
// - title: string
// - done: boolean
export type Todo = {
  // TODO
};

// 2) Zwróć liczbę zadań, które są DONE
export function countDone(todos: Todo[]): number {
  // TODO

  // filter()

  return 0;
}

// 3) Zwróć nową tablicę zadań, które NIE są DONE
// (bez modyfikowania oryginalnej tablicy)
export function getOpenTodos(todos: Todo[]): Todo[] {
  // TODO

  // filter()
  return [];
}

// 4) ustaw wszystkie todo z danym id na przeciwną wartość done
// Jeśli nie ma takiego id -> zwróć oryginalną tablicę (bez zmian)
export function toggleTodo(todos: Todo[], id: number): Todo[] {
  // TODO

  // map(item => {})

  return todos;
}

// 5) Generyk: znajdź element po id w dowolnej tablicy obiektów z id:number
// Jeśli nie znaleziono -> undefined
export function findById<T extends { id: number }>(
  items: T[],
  id: number
): T | undefined {
  // TODO

  // find()
  return undefined;
}

export const sampleTodos: Todo[] = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Send invoice', done: true },
  { id: 3, title: 'Call client', done: false },
];


// przykład użycia

const array1 = [1, 2, 3, 4, 5];

const filteredArray1 = array1.filter((item) => item > 2); // [3,4,5]

const mappedArray1 = array1.map((item) => item * 2); // [2,4,6,8,10]

const foundItem1 = array1.find((item) => item === 3); // 3