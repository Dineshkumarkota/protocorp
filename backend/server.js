const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routers/uploadsRoutes");

const app = express();
app.use(express.json());

app.use(cors({
  origin: "*"
}));


app.use("/api", uploadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});