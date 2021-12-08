var express = require("express")
const cors = require('cors')
var bodyParser = require("body-parser")

const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/fitnessApp')
var client = mongoose.connection;

client.on('error', () => console.log("Error in Connecting to Database"));
client.once('open', () => console.log("Connected to Database"))

const User = mongoose.model('user', {
    username: { type: String },
    email: { type: String },
    phno: { type: Number },
    password: { type: String }
});

app.get("/", (req, res) => {
    res.send("Backend Online");
})

app.post("/register", (req, res) => {

    const data = {
        "username": req.body.username,
        "email": req.body.email,
        "phno": req.body.phno,
        "password": req.body.password
    }

    User.exists({ username: req.body.username }, (err, result) => {
        if (err) throw err;
        if (result) {
            res.send({
                "inserted": false
            })
        }
        else {
            client.collection('users').insertOne(data, (err, collection) => {
                if (err) throw err;
                res.send({
                    "inserted": true
                })
            });
        }
    });
})

app.post("/signIn", (req, res) => {

    client.collection('users').findOne({
        $and: [
            { username: req.body.username },
            { password: req.body.password }
        ]
    }, (err, result) => {
        if (err) throw err;
        if (result) {
            res.send({
                "found": true,
                "user": result
            })
        }
        else {
            res.send({
                "found": false,
                "user": null
            })
        }
    });

})

app.listen(5000, () => {
    console.log("Listening on PORT 5000");
});
