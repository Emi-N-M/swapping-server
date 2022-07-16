const express = require("express");
const app = express();
const port = 3000;

const items = require("./data/items");
//const itemsJSON = JSON.parse(items);

console.log("items: ", items);

app.get("/", (req, res) => {
  console.log("Request recived");
  res.send(items);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
