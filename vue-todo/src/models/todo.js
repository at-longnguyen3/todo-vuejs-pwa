export default class Todo {

  static fromJson(json) {
    return new Todo(json.id, json.name, json.isCompleted)
  }

  constructor(name = '') {
    this.id = new Date().getTime();
    this.name = name;
    this.isCompleted = false;
  }

  toJson() {
    return {
      "id": this.id,
      "name": this.name,
      "isCompleted": this.isCompleted,
    }
  }

}
