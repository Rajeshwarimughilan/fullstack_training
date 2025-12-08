const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
require("./src/db");
const mongoose = require("mongoose");

app.get("/user/:userid", (req, res) => {
    const userid = req.params.userid;
    console.log(`User ID is: ${userid}`);
    res.send(`User ID is: ${userid}`)
});

// app.get("/user/:userid/profile", (req, res) => {
//     const userid = req.params.userid;
//     const name = req.query.name ;
//     const age = req.query.age ;
//     console.log(`User ID is: ${userid}`);
//     res.send(`User ID is: ${userid}, Name is: ${name}, Age is: ${age}`)
// });

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
});

const User = mongoose.model('user', userSchema);

new User({ name: 'John', age: 30 
}).save().then(() => console.log('User saved'));

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});

