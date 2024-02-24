export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, "Персонаж уже в команде");
    this.errors.set(2, "error #2");
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    } else {
      return "Unknown error";
    }
  }
}
