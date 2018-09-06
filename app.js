const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ here: "answer second" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App run on :" + PORT));
