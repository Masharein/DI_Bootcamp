const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from zivuch server!" });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on ${process.env.PORT || 3001}`);
});
