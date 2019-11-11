const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const message = req.query.message || "Hello DevOpsDays Chattanooga 2019!";
  res.status(200).send(message);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
