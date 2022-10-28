let express = require("express");

app = express();

app.get("/", function (req, res) {
  res.send("Hello Express Js");
});

let port = 5000;
app.listen(port, function () {
  console.log(`server is run seccess http://localhost:${port}/`);
});
