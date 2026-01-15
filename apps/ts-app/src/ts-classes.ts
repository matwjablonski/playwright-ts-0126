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
  // TODO
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
  // TODO
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
  // TODO
}

/**
 * ZADANIE 4.4 (opcjonalne)
 * Zaimplementuj klasę IdGenerator.
 * - ma statyczne prywatne pole nextId startujące od 1
 * - metoda statyczna:
 *   - generate(): number -> zwraca kolejne id (1,2,3,...)
 */
export class IdGenerator {
  // TODO
}