const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);


mongoose.connect('mongodb+srv://admin:12345@cluster0.kvp8cgu.mongodb.net/Node_API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to db')
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
}).catch((error) => {
    console.log(error);
})