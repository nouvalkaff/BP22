//Model berhubungan dengan database



const fs = require("fs");

class TodoList {
  constructor() {
    const data = fs.readFileSync("./wadahData.json", "utf-8");
    this.jsonFile = JSON.parse(data);
    this.todo = [];
  }

  readAll() {return this.jsonFile;}
    get allTodo() {
    return this.readAll();
  }

  readSingle(id) {
    this.todo = this.jsonFile.find((item) => item.id == id);
    return this.todo;
  }

  add(item) {
    this.jsonFile.push(item);
  }

  save() {
    fs.writeFile(
      "./wadahData.json",
      JSON.stringify(this.jsonFile, null, 2),
      (err) => {
        if (err) {
          console.log("Data gagal disimpan");
        }
        console.log("Data berhasil disimpan");
      }
    );
  }

  update(id, title, isCompleted) {
    const todo = this.jsonFile.find((item) => item.id == id);
    todo.title = title;
    todo.isCompleted = isCompleted;
    this.save();
  }

  delete(id) {
    this.jsonFile = this.jsonFile.filter((item) => item.id !== id);
    this.save();
  }
}

module.exports = TodoList;