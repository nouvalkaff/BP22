// Segregasi/pemisahan bagian yg handle bagian end-point (tujuan API)

const express = require('express');

const {
    getAktiv,
    createAktiv,
    updateAktiv,
    deleteAktiv,
  } = require("../controllers/app_controller.js");

  const router = express.Router();

//Get single record by id
router.get("/:id", getAktiv);

//Create User
router.post("/", createAktiv);

//Update todo
router.put("/:id", updateAktiv);

//Delete Todo
router.delete("/:id", deleteAktiv);

module.exports = router;