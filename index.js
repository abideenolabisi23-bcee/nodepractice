const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dns = require("dns");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));

const UserRouter = require("./routers/user.routes");
const connectDB = require("./database/connectDB");

app.use("/api/v1", UserRouter);

// Force Node to use Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("Cannot connect to DB:", err.message);
  });

const PORT = process.env.PORT || 5006;

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});

module.exports=async(req, res)=>{
    await connectDB()

    return app(req, res)
}