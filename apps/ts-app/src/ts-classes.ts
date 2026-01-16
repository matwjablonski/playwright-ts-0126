/**
 * ZADANIE 4.1
 * Zaimplementuj klasę Counter.
 * - ma prywatne pole value (start = 0)
 * - metody:
 *   - inc(): void  -> zwiększa o 1
 *   - dec(): void  -> zmniejsza o 1
 *   - getValue(): number -> zwraca aktualną wartość
 */
export class Counter {
  private value: number;
  
  constructor(initialValue: number = 0) {
    this.value = initialValue;
  }

  inc(): void {
    this.value += 1;
  }

  dec(): void {
    this.value -= 1;
  }

  getValue(): number {
    return this.value;
  }
}

/**
 * ZADANIE 4.2
 * Zaimplementuj klasę Temperature.
 * - przechowuje temperaturę w Celsjuszach (number)
 * - konstruktor przyjmuje wartość początkową
 * - metody:
 *   - getCelsius(): number
 *   - toFahrenheit(): number  -> C * 9/5 + 32
 */
export class Temperature {
  private celsius: number;

  constructor(initialTemperatureInC: number) {
    this.celsius = initialTemperatureInC;
  }

  getCelsius(): number {
    return this.celsius;
  }

  toFahrenheit(): number {
    return this.celsius * 9 / 5 + 32;
  }
}

/**
 * ZADANIE 4.3
 * Zaimplementuj klasę User.
 * - pola:
 *   - readonly id: number
 *   - name: string
 * - konstruktor: (id, name)
 * - metoda:
 *   - rename(newName: string): void
 * - walidacja:
 *   - rename nie może ustawić pustego stringa (''), w takim wypadku rzuca Error
 */
export class User {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  rename(newName: string): void {
    if (!newName) {
      throw new Error("Name cannot be empty");
    }

    this.name = newName;
  }
}

/**
 * ZADANIE 4.4 (opcjonalne)
 * Zaimplementuj klasę IdGenerator.
 * - ma statyczne prywatne pole nextId startujące od 1
 * - metoda statyczna:
 *   - generate(): number -> zwraca kolejne id (1,2,3,...)
 */
export class IdGenerator {
  static #nextId: number = 1;

  static generate(): number {
    return this.#nextId++;
  }
}

IdGenerator.generate(); // 1
IdGenerator.generate(); // 2
IdGenerator.generate(); // 3
