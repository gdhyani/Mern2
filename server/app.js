const express = require("express");
// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
var md5 = require("md5");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const { Schema } = mongoose;

mongoose.set("strictQuery", true);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

const url =
  "mongodb+srv://gauravdhyani:dGQuY7vzD716PNMH@mern2.61fizcf.mongodb.net/?retryWrites=true&w=majority";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("<p>Server Started On Port 4000</p>");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const found = await User.findOne({ username });
  if (!found) {
    res.status(404);
  } else {
    if (found.password !== md5(password)) {
      res.status(400);
      console.log("incorrect credentials");
    } else {
      res.status(200)
      console.log("logged in");
    }
  }

  mongoose.connection.close();

  res.json({ requestedData: { username, password } });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // send_to_db(username, md5(password));
  db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await User.create({
      username,
      password: md5(password),
    });
  } catch (err) {
    console.log(err.code);
    res.status(400);
  }
  mongoose.connection.close();

  res.json({ requestedData: { username, password } });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server Started On Port 4000");
});
