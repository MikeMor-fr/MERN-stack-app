const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

app.use(express.json());
app.use(cors());

// CONNECTION TO THE DATABASE MONGODB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,  useUnifiedTopology: true})
	.then(() => console.log("connected successfully to the DB !"))
	.catch(error => {console.log(error)})


// SET THE ROUTE FILES
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// CODING SERVER


// CONNECTION TO THE SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server connected to port : ${port}`);
})