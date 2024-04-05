export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(personage) {
    if (this.members.has(personage)) {
      throw new Error('Этот персонаж уже добавлен!!');
    } else {
      this.members.add(personage);
    }
  }

  addAll(...personages) {
    for (const personage of personages) {
      this.members.add(personage);
    }
  }

  toArray() {
    return [...this.members];
  }
}