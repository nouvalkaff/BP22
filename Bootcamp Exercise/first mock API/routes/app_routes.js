//Segregasi bagian yg handle bagian end-point (tujuan API)

const express = require('express');

const {
    getAllAktiv
  } = require("../controllers/app_controller.js");

  const router = express.Router();

//Get All Todos
router.get("/", getAllAktiv);


module.exports = router;