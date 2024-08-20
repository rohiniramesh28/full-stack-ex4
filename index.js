const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

const data={
    "name": "Rohini R",
    "roll_number" : "22BAD078",
    "age": 19,
    "date_of_birth": "March 28 2005"
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("data.ejs",{
    data:data 
  });
});

app.listen(port, () => {
  console.log("server is started...");
});