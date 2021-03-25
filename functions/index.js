// const functions = require("firebase-functions"); This is for when
// we hosting it on firebase function
const express = require("express");
const path = require("path");
/* Express */
const app1 = express();
app1.set("view engine", "hbs");
app1.get("/start", (request, response) => {
  response.sendFile(path.join(__dirname+"/index.html"));
});
app1.get("/fun", (request, response) => {
  response.send("Hello for fun!");
});
app1.get("/good", (request, response) => {
  response.send("Hello gentle man!");
});
app1.get("/tob", (request, response) => {
  response.send("Hello from tob!");
});
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Hamza:ghulammustafa@cluster0.e5ec6.mongodb.net/storage?retryWrites=true&w=majority", {useNewUrlParser: true}, {useUnifiedTopology: true}, {useMongoClient: true}).then(()=>console.log("connected"));
const Post = require("./post");
// first API for taking input from user
app1.post("/nameprice", (req, res) => {
  const np={
    item_name: req.body.item_name,
    price: req.body.price,
  };
  console.log(np);
  const CurPost = new Post(np);
  CurPost.save().then(()=>{
    res.json({np, success: "OK"});
  }).catch((err)=>{
    console.log(err);
    res.json({np, success: "NOT OK"});
  });
});
// second API for take input item_name and fetch price of
// an item name according to the data present in
// database then the output send to the user is null.
app1.post("/price", (req, res)=>{
  console.log(req.body.item_name);
  const np={
    item_name: req.body.item_name,
  };
  const PostResult = Post.findOne(np);
  console.log(PostResult);
  res.json({PostResult, success: "OK"});
});
// third and last API for send all the records to the user from database.
app1.post("/", (req, res)=>{
  console.log(req.body.item_name);
  console.log(req.body.price);
  const np={
    item_name: req.body.item_name,
    price: req.body.price,
  };
  const AllResult = Post.findOne();
  console.log(AllResult);
  console.log(np);
  res.json({AllResult, success: "OK"});
});
app1.listen(3000, ()=>{
  console.log("Server start on Port 3000");
});
// const api1 = functions.https.onRequest(app1); first, this and last line will
// module.exports = {api1}; be uncommented.
