const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const cors = require("cors");
// dGQuY7vzD716PNMH
app.use(cors());
app.use(express.json());

//////////
const url =
  "mongodb+srv://gauravdhyani:dGQuY7vzD716PNMH@mern2.61fizcf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
console.log("connection made");

async function send_to_db(client, username, password ) {
  await client.connect();
  console.log("connected");
  const addDb = await client
    .db("Users")
    .collection("userCred")
    .insertOne({
      username,
      password,
      // time
    });
  console.log(addDb);
  client.close();
}

async function check_in_db(client, username){
  await client.connect();
  const checkDb = await client.db("Users").collection("userCred").findOne({username})
  if (checkDb){
    console.log(checkDb.password)
    // console.log("Found and password is : " + client.db(checkDb.password))
  }else{
    console.log("No User")
  }
}

app.get("/", (req, res) => {
  connect();
  res.send("<p>Server Started On Port 4000</p>");
});
app.post("/login", (req, res) => {
  const { LoginUser, LoginPass } = req.body;
  check_in_db(client, LoginUser)
  console.log("Login:\n" + LoginUser, LoginPass);
  res.json({ requestedData: { LoginUser, LoginPass } });
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log("Register:\n" + username, password);
  send_to_db(client, username, password)
  res.json({ requestedData: { username, password } });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server Started On Port 4000");
});
