const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Kaycnakasi:redmi888@cluster0.h1af3.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology:true});
const cors = require('cors');
const app = express();
const port = process.env.PORT | 80;

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res)=> {
    res.send('Hello Word'); 
})

app.get('/api',require('./routes/index.js') );

app.listen(port, () => {
    console.log('Server runing http://localhost');
});