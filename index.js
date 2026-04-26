const express = require("express");
const cors = require("cors");
const { connectDB } = require("./connection");
const urlRouter = require("./routes/url.route");
const app = express();
const PORT = 3000;

//middleware
app.use(cors());
app.use(express.json());

//db connection
connectDB();

//routes
app.use("/api/url", urlRouter);

//app initialization
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
