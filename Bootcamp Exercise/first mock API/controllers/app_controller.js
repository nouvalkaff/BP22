//Bisnis logic, informasinya mau diapain...


const faker = require('faker');
const toDoList = require('../models/app_data_model.js');

//Class Todolist for read, add, save, update and delete JSON file
const myToDo = new toDoList();

//Create random id using Faker
const uuid = faker.datatype.uuid();

//Get All Todos
const getAllAktiv = (req, res) => {
    const todoAll = myToDo.readAll()
    res.send({
      statusCode: 200,
      statusMessage: "success",
      data: todoAll
    });
};

//Get single Todo
const getAktiv = (req, res) => {
    const id = req.params.id;
    const todo = myToDo.readSingle(id);
    if (todo) {
      res.send({
        statusCode: 200,
        statusText: "success",
        data: todo,
        });
    } else {
        res.send(`ID: ${req.params.id} tidak ditemukan`);
    }
};

  //Create Todo
const createAktiv = (req, res) => {
    const todoAll = myToDo.readAll()
    myToDo.add({
      id: uuid,
      ...req.body,
    });
    myToDo.save();
    res.send({
      statusCode: 200,
      statusText: "success",
      statusMessage: `Todo "${req.body.title}" berhasil ditambahkan`,
      data: todoAll
    });
  };

  //Update Todo
const updateAktiv = (req, res) => {
    const id = req.params.id;
    const todo = myToDo.readSingle(id);
    if (todo) {
      const title = req.body.title;
      const isCompleted = req.body.isCompleted;
  
      myToDo.update(id, title, isCompleted);
      res.send({
        statusCode: 200,
        statusText: "success",
        statusMessage: `Todo dengan ${id} berhasil di update`,
        data: todo,
      });
    } else {
      res.send(`Todo dengan ID: ${id} tidak ditemukan`);
    }
  };

  //Delete Todo
const deleteAktiv = (req, res) => {
    const id = req.params.id;
    const todoAll = myToDo.readAll()
    const todo = myToDo.readSingle(id);
    if (todo) {
        myToDo.delete(id);
      res.send({
        statusCode: 200,
        statusText: "success",
        statusMessage: `Todo dengan ID ${id} berhasil di hapus`,
        data: todoAll
      });
    } else {
      res.send(`Todo dengan ID ${id} tidak ditemukan`);
    }
  };

  module.exports = { getAllAktiv, getAktiv, createAktiv, updateAktiv, deleteAktiv };