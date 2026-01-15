export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export function countDone(todos: Todo[]): number {
  const doneCount = todos.filter(todo => todo.done).length;
  return doneCount;
}

export function getOpenTodos(todos: Todo[]): Todo[] {
  const unDoneTodos = todos.filter(todo => !todo.done)
  return unDoneTodos;
}

export function toggleTodo(todos: Todo[], id: number): Todo[] {
  return todos.map(todo => {
    if (todo.id === id) {
      return {
        title: todo.title,
        id: todo.id,
        done: !todo.done
      }
    }

    return todo;
  })
}

export function findById<T extends { id: number }>(
  items: T[],
  id: number
): T | undefined {
  const foundItem = items.find(item => item.id === id);
  return foundItem;
}

export const sampleTodos: Todo[] = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Send invoice', done: true },
  { id: 3, title: 'Call client', done: false },
];

const result = findById<Todo>(sampleTodos, 5)

console.log(result)
// przykład użycia

const array1 = [1, 2, 3, 4, 5];

const filteredArray1 = array1.filter((item) => item > 2); // [3,4,5]

const mappedArray1 = array1.map((item) => item * 2); // [2,4,6,8,10]

const foundItem1 = array1.find((item) => item === 3); // 3