const express = require("express");
let router = express.Router();
const chirpsStore = require("../chirpstore");

router.get("/", (req, res) => {
  //   res.send("test");
  res.send(chirpsStore.GetChirps());
});

router.post("/", (req, res) => {
  chirpsStore.CreateChirp(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  res.send(chirpsStore.UpdateChirp(id, req.body));
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    res.send(chirpsStore.DeleteChirp(id));
});
module.exports = router;
