const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route.js');

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://CCAnkit:CCAnkit09@clusternew.gds9x.mongodb.net/TechnoSoftwaresAssignment", { useNewUrlParser: true
}).then(() => console.log("Successfully connected to MongoDB")).catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express App is connected on Port' + (process.env.PORT || 3000))
})

