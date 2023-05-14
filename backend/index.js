const express = require("express");
const connectToMongo = require("./db");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello Dev");
});

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/notes", require("./routes/notes"));

connectToMongo();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
