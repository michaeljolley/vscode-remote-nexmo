const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const message = req.query.message || "Hello DevOpsDays Chattanooga 2019!<br/><br/>Don't forget to text <b>1-205-350-1515</b> for slides, source & more!";
  res.status(200).send(message);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
