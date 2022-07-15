const express = require("express");

const animesRoutes = require("./../controllers/animes-controller.js");

const router = express.Router();

router.get("/all", animesRoutes.animesAll);

router.post("/create", animesRoutes.animesCreate);

router.post("/update", animesRoutes.animesUpdate);

router.put("/delete", animesRoutes.animesDelete);

module.exports = router;
