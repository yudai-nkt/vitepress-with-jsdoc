/**
 * @file fooo
 */

/**
 * This class represents a person.
 */
export class Person {
  name: string;
  /**
   *
   * @param name Person's name
   */
  constructor(name: string) {
    this.name = name;
  }
  /**
   * Say hello and introduce oneself.
   * @returns Self-introduction phrase.
   */
  selfIntroduce(): string {
    return `Hello, I'm ${this.name}`;
  }
}

/**
 * Helper function to instantiate a {@link Person}.
 * @param name
 * @returns a {@link Person} instance.
 */
export const createPerson = (name: string) => new Person(name);
