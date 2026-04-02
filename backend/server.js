const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routers/uploadsRoutes");

const app = express();
app.use(express.json());

app.use(cors());


app.use("/api", uploadRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});