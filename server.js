const express = require("express");

const PORT = 8080;

const app = express();

app.get("/:fahrenheit", (req, res) => {
  res.send({
    celcius: ((req.params.fahrenheit - 32) * 5) / 9,
  });
});

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}`);
});
