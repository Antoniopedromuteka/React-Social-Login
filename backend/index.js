
const express = require('express');

const app = express();

console.log("hello world!");

app.listen("5000", ()=>{
    console.log("server is running!");
})