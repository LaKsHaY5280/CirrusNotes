const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = require("./db");
var cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello Dev");
});

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/notes", require("./routes/notes"));

connectToMongo();
app.listen(port, () => {
  console.log(`CirrusNotes app listening at http://localhost:${port}`);
});
